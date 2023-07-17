import{_ as s}from"./chunks/JSB2.0-Architecture.df8756dd.js";import{_ as a,o as n,c as l,V as e}from"./chunks/framework.45235b34.js";const p="/docs/cocos/assets/v8-win32-debug.deed8a12.jpg",o="/docs/cocos/assets/v8-win32-memory.0d2a6436.jpg",t="/docs/cocos/assets/v8-win32-profile.c8b09145.jpg",m=JSON.parse('{"title":"JSB 2.0 绑定教程","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/advanced-topics/JSB2.0-learning.md","filePath":"zh/manual/advanced-topics/JSB2.0-learning.md"}'),c={name:"zh/manual/advanced-topics/JSB2.0-learning.md"},r=e('<h1 id="jsb-2-0-绑定教程" tabindex="-1">JSB 2.0 绑定教程 <a class="header-anchor" href="#jsb-2-0-绑定教程" aria-label="Permalink to &quot;JSB 2.0 绑定教程&quot;">​</a></h1><h2 id="抽象层" tabindex="-1">抽象层 <a class="header-anchor" href="#抽象层" aria-label="Permalink to &quot;抽象层&quot;">​</a></h2><h3 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h3><p><img src="'+s+`" alt="Architecture"></p><h3 id="宏-macro" tabindex="-1">宏（Macro） <a class="header-anchor" href="#宏-macro" aria-label="Permalink to &quot;宏（Macro）&quot;">​</a></h3><p>抽象层必然会比直接使用 JS 引擎 API 的方式多占用一些 CPU 执行时间，如何把抽象层本身的开销降到最低成为设计的第一目标。</p><p>JS 绑定的大部分工作其实就是设定 JS 相关操作的 CPP 回调，在回调函数中关联 CPP 对象。其实主要包含如下两种类型：</p><ul><li>注册 JS 函数（包含全局函数，类构造函数、类析构函数、类成员函数，类静态成员函数），绑定一个 CPP 回调</li><li>注册 JS 对象的属性读写访问器，分别绑定读与写的 CPP 回调</li></ul><p>如何做到抽象层开销最小而且暴露统一的 API 供上层使用？</p><p>以注册 JS 函数的回调定义为例，JavaScriptCore、SpiderMonkey、V8、ChakraCore 的定义各不相同，具体如下：</p><ul><li><p>JavaScriptCore</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">JSValueRef JSB_foo_func(</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSContextRef _cx,</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSObjectRef _function,</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSObjectRef _thisObject,</span></span>
<span class="line"><span style="color:#A6ACCD;">    size_t argc,</span></span>
<span class="line"><span style="color:#A6ACCD;">    const JSValueRef _argv[],</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSValueRef* _exception</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div></li><li><p>SpiderMonkey</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool JSB_foo_func(</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSContext* _cx,</span></span>
<span class="line"><span style="color:#A6ACCD;">    unsigned argc,</span></span>
<span class="line"><span style="color:#A6ACCD;">    JS::Value* _vp</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div></li><li><p>V8</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">void JSB_foo_func(</span></span>
<span class="line"><span style="color:#A6ACCD;">    const v8::FunctionCallbackInfo&lt;v8::Value&gt;&amp; v8args</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div></li><li><p>ChakraCore</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">JsValueRef JSB_foo_func(</span></span>
<span class="line"><span style="color:#A6ACCD;">    JsValueRef _callee,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bool _isConstructCall,</span></span>
<span class="line"><span style="color:#A6ACCD;">    JsValueRef* _argv,</span></span>
<span class="line"><span style="color:#A6ACCD;">    unsigned short argc,</span></span>
<span class="line"><span style="color:#A6ACCD;">    void* _callbackState</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div></li></ul><p>我们评估了几种方案，最终确定使用 <code>宏</code> 来抹平不同 JS 引擎回调函数定义与参数类型的不同，不管底层是使用什么引擎，开发者统一使用一种回调函数的定义。我们借鉴了 lua 的回调函数定义方式，抽象层所有的 JS 到 CPP 的回调函数的定义为：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool foo(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(foo) // 此处以回调函数的定义为例</span></span></code></pre></div><p>开发者编写完回调函数后，记住使用 <code>SE_BIND_XXX</code> 系列的宏对回调函数进行包装。目前提供了如下几个宏：</p><ul><li><strong>SE_BIND_PROP_GET</strong>：包装一个 JS 对象属性读取的回调函数</li><li><strong>SE_BIND_PROP_SET</strong>：包装一个 JS 对象属性写入的回调函数</li><li><strong>SE_BIND_FUNC_AS_PROP_GET</strong>: 普通函数转化为读取属性的回调</li><li><strong>SE_BIND_FUNC_AS_PROP_SET</strong>: 普通函数转化为写入属性的回调</li><li><strong>SE_BIND_FUNC</strong>：包装一个 JS 函数，可用于全局函数、类成员函数、类静态函数</li><li><strong>SE_BIND_FUNC_FAST</strong>: 包装无参的 JS 函数, 相比 <code>SE_BIND_FUNC</code> 更高效</li><li><strong>SE_DECLARE_FUNC</strong>：声明一个 JS 函数，一般在 <code>.h</code> 头文件中使用</li><li><strong>SE_BIND_CTOR</strong>：包装一个 JS 构造函数</li><li><strong>SE_BIND_SUB_CLS_CTOR</strong>：包装一个 JS 子类的构造函数，此子类可以继承</li><li><strong>SE_BIND_FINALIZE_FUNC</strong>：包装一个 JS 对象被 GC 回收后的回调函数</li><li><strong>SE_DECLARE_FINALIZE_FUNC</strong>：声明一个 JS 对象被 GC 回收后的回调函数</li><li><strong>_SE</strong>：包装回调函数的名称，转义为每个 JS 引擎能够识别的回调函数的定义 <blockquote><p><strong>注意</strong>：第一个字符为下划线，类似 Windows 下用的 <code>_T(&quot;xxx&quot;)</code> 来包装 Unicode 或者 MultiBytes 字符串。</p></blockquote></li></ul><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="cpp-命名空间-namespace" tabindex="-1">CPP 命名空间（namespace） <a class="header-anchor" href="#cpp-命名空间-namespace" aria-label="Permalink to &quot;CPP 命名空间（namespace）&quot;">​</a></h3><p>CPP 抽象层所有的类型都在 <code>se</code> 命名空间下，其为 ScriptEngine 的缩写。</p><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><h4 id="se-scriptengine" tabindex="-1">se::ScriptEngine <a class="header-anchor" href="#se-scriptengine" aria-label="Permalink to &quot;se::ScriptEngine&quot;">​</a></h4><p><code>se::ScriptEngine</code> 为 JS 引擎的管理员，掌管 JS 引擎初始化、销毁、重启、Native 模块注册、加载脚本、强制垃圾回收、JS 异常清理、是否启用调试器。它是一个单例，可通过 <code>se::ScriptEngine::getInstance()</code> 得到对应的实例。</p><h4 id="se-value" tabindex="-1">se::Value <a class="header-anchor" href="#se-value" aria-label="Permalink to &quot;se::Value&quot;">​</a></h4><p><code>se::Value</code> 可以被理解为 JS 变量在 CPP 层的引用。JS 变量有 <code>object</code>、<code>number</code>、 <code>bigint</code>, <code>string</code>、<code>boolean</code>、<code>null</code> 和 <code>undefined</code> 六种类型。因此 <code>se::Value</code> 使用 <code>union</code> 包含 <code>object</code>、<code>number</code>、<code>string</code>、<code>boolean</code> 5 种 <strong>有值类型</strong>。<strong>无值类型</strong> 包含 <code>null</code> 和 <code>undefined</code>，可由 <code>_type</code> 直接表示。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">namespace se {</span></span>
<span class="line"><span style="color:#A6ACCD;">    class Value {</span></span>
<span class="line"><span style="color:#A6ACCD;">        enum class Type : char</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            Undefined = 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">            Null,</span></span>
<span class="line"><span style="color:#A6ACCD;">            Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">            Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">            String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">            BigInt, // 多用于存储指针类型</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    private:</span></span>
<span class="line"><span style="color:#A6ACCD;">        union {</span></span>
<span class="line"><span style="color:#A6ACCD;">            bool _boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">            double _number;</span></span>
<span class="line"><span style="color:#A6ACCD;">            std::string* _string;</span></span>
<span class="line"><span style="color:#A6ACCD;">            Object* _object;</span></span>
<span class="line"><span style="color:#A6ACCD;">            int64_t _bigint;</span></span>
<span class="line"><span style="color:#A6ACCD;">        } _u;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        Type _type;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>如果 <code>se::Value</code> 中保存基础数据类型，比如 <code>number</code>，<code>string</code>，<code>boolean</code>，其内部是直接存储一份值副本。<br><code>object</code> 的存储比较特殊，是通过 <code>se::Object*</code> 对 JS 对象的弱引用 (weak reference)。</p><h4 id="se-object" tabindex="-1">se::Object <a class="header-anchor" href="#se-object" aria-label="Permalink to &quot;se::Object&quot;">​</a></h4><p><code>se::Object</code> 继承于 <code>se::RefCounter</code> 引用计数管理类。目前抽象层中只有 <code>se::Object</code> 继承于 <code>se::RefCounter</code>。</p><p>上一小节我们说到，<code>se::Object</code> 是保存了对 JS 对象的弱引用，这里有必要解释一下为什么是弱引用。</p><p><strong>原因一：JS 对象控制 CPP 对象的生命周期的需要</strong></p><p>当在脚本层中通过 <code>var xhr = new XMLHttpRequest();</code> 创建了一个 XMLHttpRequest 后，在构造回调函数绑定中我们会创建一个 <code>se::Object</code> 并保留在一个全局的 <code>map (NativePtrToObjectMap)</code> 中，此 map 用于查询 <code>XMLHttpRequest*</code> 指针获取对应的 JS 对象 <code>se::Object*</code>。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/// native/cocos/bindings/manual/jsb_xmlhttprequest.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">static bool XMLHttpRequest_constructor(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    XMLHttpRequest* cobj = JSB_ALLOC(XMLHttpRequest);</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.thisObject()-&gt;setPrivateData(cobj);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_CTOR(XMLHttpRequest_constructor, __jsb_XMLHttpRequest_class, XMLHttpRequest_finalize)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/// native/cocos/bindings/jswrapper/v8/Object.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">void Object::setPrivateObject(PrivateObjectBase *data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ... </span></span>
<span class="line"><span style="color:#A6ACCD;">    if (data != nullptr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        _privateData = data-&gt;getRaw();</span></span>
<span class="line"><span style="color:#A6ACCD;">        NativePtrToObjectMap::emplace(_privateData, this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        _privateData = nullptr;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>设想如果强制要求 <code>se::Object</code> 为 JS 对象的强引用(strong reference)，即让 JS 对象不受 GC 控制，由于 <code>se::Object</code> 一直存在于 map 中，finalizer 回调将永远无法被触发，从而导致内存泄露。</p><p><strong>原因二：更加灵活，手动调用 root 方法以支持强引用</strong></p><p><code>se::Object</code> 中提供了 <code>root</code>/<code>unroot</code> 方法供开发者调用，<code>root</code> 会把 JS 对象放入到不受 GC 扫描到的区域，调用 <code>root</code> 后，<code>se::Object</code> 就强引用了 JS 对象，只有当 <code>unroot</code> 被调用，或者 <code>se::Object</code> 被释放后，JS 对象才会放回到受 GC 扫描到的区域。</p><p>一般情况下，如果对象是非 <code>cc::Ref</code> 的子类，会采用 CPP 对象控制 JS 对象的生命周期的方式去绑定。引擎内 Spine, DragonBones, Box2d 等第三方库的绑定就是采用此方式。当 CPP 对象被释放的时候，需要在 <code>NativePtrToObjectMap</code> 中查找对应的 <code>se::Object</code>，然后手动 <code>unroot</code> 和 <code>decRef</code>。以 Spine 中 <code>spTrackEntry</code> 的绑定为例：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">spTrackEntry_setDisposeCallback([](spTrackEntry* entry) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // spTrackEntry 的销毁回调</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* seObj = nullptr;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    auto iter = se::NativePtrToObjectMap::find(entry);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (iter != se::NativePtrToObjectMap::end()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 保存 se::Object 指针，用于在下面的 cleanup 函数中释放其内存</span></span>
<span class="line"><span style="color:#A6ACCD;">        seObj = iter-&gt;second;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // Native 对象 entry 的内存已经被释放，因此需要立马解除 Native 对象与 JS 对象的关联。</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 如果解除引用关系放在下面的 cleanup 函数中处理，有可能触发 se::Object::setPrivateData 中</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 的断言，因为新生成的 Native 对象的地址可能与当前对象相同，而 cleanup 可能被延迟到帧结束前执行。</span></span>
<span class="line"><span style="color:#A6ACCD;">        se::NativePtrToObjectMap::erase(iter);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    auto cleanup = [seObj]() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        auto se = se::ScriptEngine::getInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!se-&gt;isValid() || se-&gt;isInCleanup())</span></span>
<span class="line"><span style="color:#A6ACCD;">            return;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        se::AutoHandleScope hs;</span></span>
<span class="line"><span style="color:#A6ACCD;">        se-&gt;clearException();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        // 由于上面逻辑已经把映射关系解除了，这里传入 false 表示不用再次解除映射关系,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 因为当前 seObj 的 private data 可能已经是另外一个不同的对象</span></span>
<span class="line"><span style="color:#A6ACCD;">        seObj-&gt;clearPrivateData(false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        seObj-&gt;unroot(); // unroot，使 JS 对象受 GC 管理</span></span>
<span class="line"><span style="color:#A6ACCD;">        seObj-&gt;decRef(); // 释放 se::Object</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 确保不再垃圾回收中去操作 JS 引擎的 API</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!se::ScriptEngine::getInstance()-&gt;isGarbageCollecting()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cleanup();</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 如果在垃圾回收，把清理任务放在帧结束中进行</span></span>
<span class="line"><span style="color:#A6ACCD;">        CleanupTask::pushTaskToAutoReleasePool(cleanup);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p><strong>C++ 对象的生命周期管理</strong></p><p>在 3.6 之前, 析构回调 <code>_finalize</code> 会根据对象类型和是否存在于<code>se::NonRefNativePtrCreatedByCtorMap</code> 来决定调用 <code>delete</code> 或者 <code>release</code> 以释放对应的 C++ 对象. 3.6 开始 <code>_finalize</code> 回调被弃用, 暂时为方便调试保留为空函数. <code>se::Object</code> 通过 <code>se::PrivateObjectBase</code> 对象和 C++ 对象建立生命周期的关联. <code>se::PrivateObjectBase</code> 的三个子类对应了不同的释放策略.</p><ul><li><code>se::CCSharedPtrPrivateObject&lt;T&gt;</code></li></ul><p>使用 <code>cc::IntrusivePtr</code> 存储 C++ 对象的指针, 要求 C++ 类继承 <code>cc::RefCounted</code>. 其中 <code>cc::IntrusivePtr</code> 为智能指针类型, 会自动增减 <code>cc::RefCounted</code> 的引用计数. 当引用计数为 0 时, 触发析构.</p><ul><li><code>se::SharedPrivateObject&lt;T&gt;</code></li></ul><p>使用 <code>std::shared_ptr</code> 存储 C++ 对象指针, 要求 C++ 类<strong>不继承</strong> <code>cc::RefCounted</code>. 由于 <code>shared_ptr</code> 本身的特性, 要求所有强引用都 <code>shared_ptr</code>. 所有 <code>shared_ptr</code> 都销毁时触发 C++ 对象的析构.</p><ul><li><code>se::RawRefPrivateObject&lt;T&gt;</code></li></ul><p>使用裸指针, 默认为对 C++ 对象的弱引用. 可通过调用 <code>tryAllowDestroyInGC</code> 转为强引用. 作为弱引用时, GC 不触发对象的析构.</p><p><strong>关联原生对象</strong></p><p>3.6 之后 <code>se::Object::setPrivateData(void *)</code> 扩展成了:</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">inline void setPrivateData(T *data);</span></span></code></pre></div><p>能自动根据类型信息创建 <code>SharedPrivateObject</code> 或者 <code>CCSharedPtrPrivateObject</code>, 但是不支持 <code>RawRefPrivateObject</code>.</p><p>我们可以使用 <code>setPrivateObject</code> 显示指定 <code>PrivateObject</code> 的类型:</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// se::SharedPrivateObject&lt;T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj-&gt;setPrivateObject(se::shared_private_object(v));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// se::CCSharedPtrPrivateObject&lt;T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj-&gt;setPrivateObject(se::ccshared_private_object(v));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// se::RawRefPrivateObject&lt;T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj-&gt;setPrivateObject(se::rawref_private_object(v));</span></span></code></pre></div><p><strong>对象类型</strong></p><p>绑定对象的创建已经被隐藏在对应的 <code>SE_BIND_CTOR</code> 和 <code>SE_BIND_SUB_CLS_CTOR</code> 函数中，开发者在绑定回调中如果需要用到当前对象对应的 <code>se::Object</code>，只需要通过 <code>s.thisObject()</code> 即可获取。其中 s 为 <code>se::State</code> 类型，具体会在后续章节中说明。</p><p>此外，<code>se::Object</code> 目前支持以下几种对象的手动创建：</p><ul><li>Plain Object：通过 <code>se::Object::createPlainObject</code> 创建，类似 JS 中的 <code>var a = {};</code></li><li>Array Object：通过 <code>se::Object::createArrayObject</code> 创建，类似 JS 中的 <code>var a = [];</code></li><li>Uint8 Typed Array Object：通过 <code>se::Object::createTypedArray</code> 创建，类似 JS 中的 <code>var a = new Uint8Array(buffer);</code></li><li>Array Buffer Object：通过 <code>se::Object::createArrayBufferObject</code>，类似 JS 中的 <code>var a = new ArrayBuffer(len);</code></li></ul><p><strong>手动创建对象的释放</strong></p><p><code>se::Object::createXXX</code> 方法与 Cocos Creator 中的 <code>create</code> 方法不同，抽象层是完全独立的一个模块，并不依赖与 Cocos Creator 的 autorelease 机制。虽然 <code>se::Object</code> 也是继承引用计数类，但开发者需要处理 <strong>手动创建出来的对象</strong> 的释放。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">se::Object* obj = se::Object::createPlainObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">obj-&gt;decRef(); // 释放引用，避免内存泄露</span></span></code></pre></div><h4 id="se-handleobject-推荐的管理手动创建对象的辅助类" tabindex="-1">se::HandleObject（推荐的管理手动创建对象的辅助类） <a class="header-anchor" href="#se-handleobject-推荐的管理手动创建对象的辅助类" aria-label="Permalink to &quot;se::HandleObject（推荐的管理手动创建对象的辅助类）&quot;">​</a></h4><ul><li><p>在比较复杂的逻辑中使用手动创建对象，开发者往往会忘记在不同的逻辑中处理 <code>decRef</code></p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool foo()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* obj = se::Object::createPlainObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (var1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false; // 这里直接返回了，忘记做 decRef 释放操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    if (var2)</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false; // 这里直接返回了，忘记做 decRef 释放操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj-&gt;decRef();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>就算在不同的返回条件分支中加上了 decRef 也会导致逻辑复杂，难以维护，如果后期加入另外一个返回分支，很容易忘记 decRef。</p></li><li><p>JS 引擎在 <code>se::Object::createXXX</code> 后，如果由于某种原因 JS 引擎做了 GC 操作，导致后续使用的 <code>se::Object</code> 内部引用了一个非法指针，引发程序崩溃</p></li></ul><p>为了解决上述两个问题，抽象层定义了一个辅助管理 <strong>手动创建对象</strong> 的类型，即 <code>se::HandleObject</code>。</p><p><code>se::HandleObject</code> 是一个辅助类，用于更加简单地管理手动创建的 <code>se::Object</code> 对象的释放、root 和 unroot 操作。</p><p>以下两种代码写法是等价的，使用 <code>se::HandleObject</code> 的代码量明显少很多，而且更加安全。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::HandleObject obj(se::Object::createPlainObject());</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj-&gt;setProperty(...);</span></span>
<span class="line"><span style="color:#A6ACCD;">    otherObject-&gt;setProperty(&quot;foo&quot;, se::Value(obj));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>等价于：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* obj = se::Object::createPlainObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj-&gt;root(); // 在手动创建完对象后立马 root，防止对象被 GC</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    obj-&gt;setProperty(...);</span></span>
<span class="line"><span style="color:#A6ACCD;">    otherObject-&gt;setProperty(&quot;foo&quot;, se::Value(obj));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    obj-&gt;unroot(); // 当对象被使用完后，调用 unroot</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj-&gt;decRef(); // 引用计数减一，避免内存泄露</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><p><strong>注意</strong>：</p><ol><li>不要尝试使用 <code>se::HandleObject</code> 创建一个 native 与 JS 的绑定对象，在 JS 控制 CPP 的模式中，绑定对象的释放会被抽象层自动处理，在 CPP 控制 JS 的模式中，前一章节中已经有描述了。</li><li><code>se::HandleObject</code> 对象只能够在栈上被分配，而且栈上构造的时候必须传入一个 <code>se::Object</code> 指针。</li></ol></blockquote><h4 id="se-class" tabindex="-1">se::Class <a class="header-anchor" href="#se-class" aria-label="Permalink to &quot;se::Class&quot;">​</a></h4><p><code>se::Class</code> 用于暴露 CPP 类到 JS 中，它会在 JS 中创建一个对应名称的 <code>constructor function</code>。</p><p>它有如下方法：</p><ul><li><code>static se::Class* create(className, obj, parentProto, ctor)</code>：创建一个 Class，注册成功后，在 JS 层中可以通过<code>var xxx = new SomeClass();</code>的方式创建一个对象</li><li><code>bool defineFunction(name, func)</code>：定义 Class 中的成员函数</li><li><code>bool defineProperty(name, getter, setter)</code>：定义 Class 属性读写器</li><li><code>bool defineStaticFunction(name, func)</code>：定义 Class 的静态成员函数，可通过 <code>SomeClass.foo()</code> 这种非 new 的方式访问，与类实例对象无关</li><li><code>bool defineStaticProperty(name, getter, setter)</code>：定义 Class 的静态属性读写器，可通过 <code>SomeClass.propertyA</code> 直接读写，与类实例对象无关</li><li><code>bool defineFinalizeFunction(func)</code>：定义 JS 对象被 GC 后的 CPP 回调</li><li><code>bool install()</code>：注册此类到 JS 虚拟机中</li><li><code>Object* getProto()</code>：获取注册到 JS 中的类（其实是 JS 的 constructor）的 prototype 对象，类似 <code>function Foo(){}</code> 的 <code>Foo.prototype</code></li><li><code>const char* getName() const</code>：获取当前 Class 的名称</li></ul><blockquote><p><strong>注意</strong>：Class 类型创建后，不需要手动释放内存，它会被封装层自动处理。</p></blockquote><p>更具体 API 说明可以翻看 API 文档或者代码注释。</p><h4 id="se-autohandlescope" tabindex="-1">se::AutoHandleScope <a class="header-anchor" href="#se-autohandlescope" aria-label="Permalink to &quot;se::AutoHandleScope&quot;">​</a></h4><p><code>se::AutoHandleScope</code> 对象类型完全是为了解决 V8 的兼容问题而引入的概念。V8 中，当有 CPP 函数中需要触发 JS 相关操作，比如调用 JS 函数，访问 JS 属性等任何调用 <code>v8::Local&lt;&gt;</code> 的操作，V8 强制要求在调用这些操作前必须存在一个 <code>v8::HandleScope</code> 作用域，否则会引发程序崩溃。</p><p>因此抽象层中引入了 <code>se::AutoHandleScope</code> 的概念，其只在 V8 上有实现，其他 JS 引擎目前都只是空实现。</p><p>开发者需要记住，在任何代码执行中，需要调用 JS 的逻辑前，声明一个 <code>se::AutoHandleScope</code> 即可，比如：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class SomeClass {</span></span>
<span class="line"><span style="color:#A6ACCD;">    void update(float dt) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        se::ScriptEngine::getInstance()-&gt;clearException();</span></span>
<span class="line"><span style="color:#A6ACCD;">        se::AutoHandleScope hs;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        se::Object* obj = ...;</span></span>
<span class="line"><span style="color:#A6ACCD;">        obj-&gt;setProperty(...);</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        obj-&gt;call(...);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><h4 id="se-state" tabindex="-1">se::State <a class="header-anchor" href="#se-state" aria-label="Permalink to &quot;se::State&quot;">​</a></h4><p>之前章节我们有提及 State 类型，它是绑定回调中的一个环境，我们通过 <code>se::State</code> 可以取得当前的 CPP 指针、<code>se::Object</code> 对象指针、参数列表、返回值引用。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool foo(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取 native 对象指针</span></span>
<span class="line"><span style="color:#A6ACCD;">    SomeClass* cobj = (SomeClass*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取 se::Object 对象指针</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* thisObject = s.thisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 获取参数列表</span></span>
<span class="line"><span style="color:#A6ACCD;">    const se::ValueArray&amp; args = s.args();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 设置返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.rval().setInt32(100);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(foo)</span></span></code></pre></div><h2 id="抽象层依赖-cocos-creator-引擎么" tabindex="-1">抽象层依赖 Cocos Creator 引擎么？ <a class="header-anchor" href="#抽象层依赖-cocos-creator-引擎么" aria-label="Permalink to &quot;抽象层依赖 Cocos Creator 引擎么？&quot;">​</a></h2><p>不依赖。</p><p>ScriptEngine 这层设计之初就将其定义为一个独立模块，完全不依赖 Cocos Creator 引擎。开发者可以通过 copy、paste 把 <code>cocos/bindings/jswrapper</code> 下的所有抽象层源码拷贝到其他项目中直接使用。</p><h2 id="手动绑定" tabindex="-1">手动绑定 <a class="header-anchor" href="#手动绑定" aria-label="Permalink to &quot;手动绑定&quot;">​</a></h2><h3 id="回调函数声明" tabindex="-1">回调函数声明 <a class="header-anchor" href="#回调函数声明" aria-label="Permalink to &quot;回调函数声明&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static bool Foo_balabala(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const auto&amp; args = s.args();</span></span>
<span class="line"><span style="color:#A6ACCD;">    int argc = (int)args.size();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    if (argc &gt;= 2) // 这里约定参数个数必须大于等于 2，否则抛出错误到 JS 层且返回 false</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    SE_REPORT_ERROR(&quot;wrong number of arguments: %d, was expecting %d&quot;, argc, 2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果是绑定函数，则用 SE_BIND_FUNC，构造函数、析构函数、子类构造函数等类似</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(Foo_balabala)</span></span></code></pre></div><h3 id="为-js-对象设置一个属性值" tabindex="-1">为 JS 对象设置一个属性值 <a class="header-anchor" href="#为-js-对象设置一个属性值" aria-label="Permalink to &quot;为 JS 对象设置一个属性值&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">se::Object* globalObj = se::ScriptEngine::getInstance()-&gt;getGlobalObject(); // 这里为了演示方便，获取全局对象</span></span>
<span class="line"><span style="color:#A6ACCD;">globalObj-&gt;setProperty(&quot;foo&quot;, se::Value(100)); // 给全局对象设置一个 foo 属性，值为 100</span></span></code></pre></div><p>在 JS 中就可以直接使用 foo 这个全局变量了</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo value: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> foo)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打印出 foo value: 100</span></span></code></pre></div><h3 id="为-js-对象定义一个属性读写回调" tabindex="-1">为 JS 对象定义一个属性读写回调 <a class="header-anchor" href="#为-js-对象定义一个属性读写回调" aria-label="Permalink to &quot;为 JS 对象定义一个属性读写回调&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 全局对象的 foo 属性的读回调</span></span>
<span class="line"><span style="color:#A6ACCD;">static bool Global_get_foo(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    NativeObj* cobj = (NativeObj*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    int32_t ret = cobj-&gt;getValue();</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.rval().setInt32(ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_PROP_GET(Global_get_foo)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 全局对象的 foo 属性的写回调</span></span>
<span class="line"><span style="color:#A6ACCD;">static bool Global_set_foo(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const auto&amp; args = s.args();</span></span>
<span class="line"><span style="color:#A6ACCD;">    int argc = (int)args.size();</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (argc &gt;= 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        NativeObj* cobj = (NativeObj*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">        int32_t arg1 = args[0].toInt32();</span></span>
<span class="line"><span style="color:#A6ACCD;">        cobj-&gt;setValue(arg1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // void 类型的函数，无需设置 s.rval，未设置默认返回 undefined 给 JS 层</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    SE_REPORT_ERROR(&quot;wrong number of arguments: %d, was expecting %d&quot;, argc, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_PROP_SET(Global_set_foo)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">void some_func()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* globalObj = se::ScriptEngine::getInstance()-&gt;getGlobalObject(); // 这里为了演示方便，获取全局对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    globalObj-&gt;defineProperty(&quot;foo&quot;, _SE(Global_get_foo), _SE(Global_set_foo)); // 使用_SE 宏包装一下具体的函数名称</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="为-js-对象设置一个函数" tabindex="-1">为 JS 对象设置一个函数 <a class="header-anchor" href="#为-js-对象设置一个函数" aria-label="Permalink to &quot;为 JS 对象设置一个函数&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static bool Foo_function(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(Foo_function)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">void some_func()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* globalObj = se::ScriptEngine::getInstance()-&gt;getGlobalObject(); // 这里为了演示方便，获取全局对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    globalObj-&gt;defineFunction(&quot;foo&quot;, _SE(Foo_function)); // 使用_SE 宏包装一下具体的函数名称</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="注册一个-cpp-类到-js-虚拟机中" tabindex="-1">注册一个 CPP 类到 JS 虚拟机中 <a class="header-anchor" href="#注册一个-cpp-类到-js-虚拟机中" aria-label="Permalink to &quot;注册一个 CPP 类到 JS 虚拟机中&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static se::Object* __jsb_ns_SomeClass_proto = nullptr;</span></span>
<span class="line"><span style="color:#A6ACCD;">static se::Class* __jsb_ns_SomeClass_class = nullptr;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace ns {</span></span>
<span class="line"><span style="color:#A6ACCD;">    class SomeClass</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public:</span></span>
<span class="line"><span style="color:#A6ACCD;">        SomeClass()</span></span>
<span class="line"><span style="color:#A6ACCD;">        : xxx(0)</span></span>
<span class="line"><span style="color:#A6ACCD;">        {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        void foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            printf(&quot;SomeClass::foo\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;">            Director::getInstance()-&gt;getScheduler()-&gt;schedule([this](float dt){</span></span>
<span class="line"><span style="color:#A6ACCD;">                static int counter = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">                ++counter;</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (_cb != nullptr)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    _cb(counter);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, this, 1.0f, CC_REPEAT_FOREVER, 0.0f, false, &quot;iamkey&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        static void static_func() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            printf(&quot;SomeClass::static_func\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        void setCallback(const std::function&lt;void(int)&gt;&amp; cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            _cb = cb;</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (_cb != nullptr)</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                printf(&quot;setCallback(cb)\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            else</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                printf(&quot;setCallback(nullptr)\\n&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        int xxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">    private:</span></span>
<span class="line"><span style="color:#A6ACCD;">        std::function&lt;void(int)&gt; _cb;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">} // namespace ns {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_finalize(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ns::SomeClass* cobj = (ns::SomeClass*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    delete cobj;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FINALIZE_FUNC(js_SomeClass_finalize)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_constructor(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ns::SomeClass* cobj = new ns::SomeClass();</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.thisObject()-&gt;setPrivateData(cobj);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_CTOR(js_SomeClass_constructor, __jsb_ns_SomeClass_class, js_SomeClass_finalize)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_foo(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ns::SomeClass* cobj = (ns::SomeClass*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    cobj-&gt;foo();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(js_SomeClass_foo)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_get_xxx(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ns::SomeClass* cobj = (ns::SomeClass*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">    s.rval().setInt32(cobj-&gt;xxx);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_PROP_GET(js_SomeClass_get_xxx)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_set_xxx(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const auto&amp; args = s.args();</span></span>
<span class="line"><span style="color:#A6ACCD;">    int argc = (int)args.size();</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (argc &gt; 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ns::SomeClass* cobj = (ns::SomeClass*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;">        cobj-&gt;xxx = args[0].toInt32();</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    SE_REPORT_ERROR(&quot;wrong number of arguments: %d, was expecting %d&quot;, argc, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_PROP_SET(js_SomeClass_set_xxx)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_static_func(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ns::SomeClass::static_func();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(js_SomeClass_static_func)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">bool js_register_ns_SomeClass(se::Object* global)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 保证 namespace 对象存在</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Value nsVal;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!global-&gt;getProperty(&quot;ns&quot;, &amp;nsVal))</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 不存在则创建一个 JS 对象，相当于 var ns = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">        se::HandleObject jsobj(se::Object::createPlainObject());</span></span>
<span class="line"><span style="color:#A6ACCD;">        nsVal.setObject(jsobj);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 将 ns 对象挂载到 global 对象中，名称为 ns</span></span>
<span class="line"><span style="color:#A6ACCD;">        global-&gt;setProperty(&quot;ns&quot;, nsVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Object* ns = nsVal.toObject();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 创建一个 Class 对象，开发者无需考虑 Class 对象的释放，其交由 ScriptEngine 内部自动处理</span></span>
<span class="line"><span style="color:#A6ACCD;">    auto cls = se::Class::create(&quot;SomeClass&quot;, ns, nullptr, _SE(js_SomeClass_constructor)); // 如果无构造函数，最后一个参数可传入 nullptr，则这个类在 JS 中无法被 new SomeClass() 出来</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 为这个 Class 对象定义成员函数、属性、静态函数、析构函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    cls-&gt;defineFunction(&quot;foo&quot;, _SE(js_SomeClass_foo));</span></span>
<span class="line"><span style="color:#A6ACCD;">    cls-&gt;defineProperty(&quot;xxx&quot;, _SE(js_SomeClass_get_xxx), _SE(js_SomeClass_set_xxx));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    cls-&gt;defineFinalizeFunction(_SE(js_SomeClass_finalize));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 注册类型到 JS VirtualMachine 的操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    cls-&gt;install();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // JSBClassType 为 Cocos Creator 引擎绑定层封装的类型注册的辅助函数，此函数不属于 ScriptEngine 这层</span></span>
<span class="line"><span style="color:#A6ACCD;">    JSBClassType::registerClass&lt;ns::SomeClass&gt;(cls);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 保存注册的结果，便于其他地方使用，比如类继承</span></span>
<span class="line"><span style="color:#A6ACCD;">    __jsb_ns_SomeClass_proto = cls-&gt;getProto();</span></span>
<span class="line"><span style="color:#A6ACCD;">    __jsb_ns_SomeClass_class = cls;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 为每个此 Class 实例化出来的对象附加一个属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    __jsb_ns_SomeClass_proto-&gt;setProperty(&quot;yyy&quot;, se::Value(&quot;helloyyy&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 注册静态成员变量和静态成员函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Value ctorVal;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (ns-&gt;getProperty(&quot;SomeClass&quot;, &amp;ctorVal) &amp;&amp; ctorVal.isObject())</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctorVal.toObject()-&gt;setProperty(&quot;static_val&quot;, se::Value(200));</span></span>
<span class="line"><span style="color:#A6ACCD;">        ctorVal.toObject()-&gt;defineFunction(&quot;static_func&quot;, _SE(js_SomeClass_static_func));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 清空异常</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::ScriptEngine::getInstance()-&gt;clearException();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="如何绑定-cpp-接口中的回调函数" tabindex="-1">如何绑定 CPP 接口中的回调函数？ <a class="header-anchor" href="#如何绑定-cpp-接口中的回调函数" aria-label="Permalink to &quot;如何绑定 CPP 接口中的回调函数？&quot;">​</a></h3><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">static bool js_SomeClass_setCallback(se::State&amp; s)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    const auto&amp; args = s.args();</span></span>
<span class="line"><span style="color:#A6ACCD;">    int argc = (int)args.size();</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (argc &gt;= 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ns::SomeClass* cobj = (ns::SomeClass*)s.nativeThisObject();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        se::Value jsFunc = args[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">        se::Value jsTarget = argc &gt; 1 ? args[1] : se::Value::Undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (jsFunc.isNullOrUndefined())</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            cobj-&gt;setCallback(nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        else</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            assert(jsFunc.isObject() &amp;&amp; jsFunc.toObject()-&gt;isFunction());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            se::Object *jsTargetObj = jsTarget.isObject() ? jsTarget.toObject() : nullptr;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果当前 SomeClass 是可以被 new 出来的类，我们 使用 se::Object::attachObject 把 jsFunc 和 jsTarget 关联到当前对象中</span></span>
<span class="line"><span style="color:#A6ACCD;">            s.thisObject()-&gt;attachObject(jsFunc.toObject());</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(jsTargetObj) .thisObject()-&gt;attachObject(jsTargetObj);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果当前 SomeClass 类是一个单例类，或者永远只有一个实例的类，我们不能用 se::Object::attachObject 去关联</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 必须使用 se::Object::root，开发者无需关系 unroot，unroot 的操作会随着 lambda 的销毁触发 jsFunc 的析构，在 se::Object 的析构函数中进行 unroot 操作。</span></span>
<span class="line"><span style="color:#A6ACCD;">            // js_audio_AudioEngine_setFinishCallback 的绑定代码就是使用此方式，因为 AudioEngine 始终只有一个实例，</span></span>
<span class="line"><span style="color:#A6ACCD;">            // 如果使用 s.thisObject-&gt;attachObject(jsFunc.toObject);会导致对应的 func 和 target 永远无法被释放，引发内存泄露。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // jsFunc.toObject()-&gt;root();</span></span>
<span class="line"><span style="color:#A6ACCD;">            // jsTarget.toObject()-&gt;root();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            cobj-&gt;setCallback([jsFunc, jsTargetObj](int counter){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                // CPP 回调函数中要传递数据给 JS 或者调用 JS 函数，在回调函数开始需要添加如下两行代码。</span></span>
<span class="line"><span style="color:#A6ACCD;">                se::ScriptEngine::getInstance()-&gt;clearException();</span></span>
<span class="line"><span style="color:#A6ACCD;">                se::AutoHandleScope hs;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                se::ValueArray args;</span></span>
<span class="line"><span style="color:#A6ACCD;">                args.push_back(se::Value(counter));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">                jsFunc.toObject()-&gt;call(args, jsTargetObj);</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    SE_REPORT_ERROR(&quot;wrong number of arguments: %d, was expecting %d&quot;, argc, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">SE_BIND_FUNC(js_SomeClass_setCallback)</span></span></code></pre></div><p>SomeClass 类注册后，就可以在 JS 中这样使用了：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> ns</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SomeClass</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> myObj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> ns</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SomeClass</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">static_func</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ns.SomeClass.static_val: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> ns</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SomeClass</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">static_val)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Old myObj.xxx:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> myObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> myObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1234</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">New myObj.xxx:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> myObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xxx)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myObj.yyy: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> myObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yyy)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> delegateObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">onCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">counter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Delegate obj, onCallback: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, this.myVar: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">myVar</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setVar</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">setVar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">myVar</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">myVar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> myObj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCallback</span><span style="color:#A6ACCD;">(delegateObj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onCallback</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> delegateObj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">myObj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setCallback</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 6 秒后清空 callback</span></span></code></pre></div><p>Console 中会输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SomeClass::foo</span></span>
<span class="line"><span style="color:#A6ACCD;">SomeClass::static_func</span></span>
<span class="line"><span style="color:#A6ACCD;">ns.SomeClass.static_val: 200</span></span>
<span class="line"><span style="color:#A6ACCD;">Old myObj.xxx:0</span></span>
<span class="line"><span style="color:#A6ACCD;">New myObj.xxx:1234</span></span>
<span class="line"><span style="color:#A6ACCD;">myObj.yyy: helloyyy</span></span>
<span class="line"><span style="color:#A6ACCD;">setCallback(cb)</span></span>
<span class="line"><span style="color:#A6ACCD;">Delegate obj, onCallback: 1, this.myVar: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">Delegate obj, onCallback: 2, this.myVar: 101</span></span>
<span class="line"><span style="color:#A6ACCD;">Delegate obj, onCallback: 3, this.myVar: 102</span></span>
<span class="line"><span style="color:#A6ACCD;">Delegate obj, onCallback: 4, this.myVar: 103</span></span>
<span class="line"><span style="color:#A6ACCD;">Delegate obj, onCallback: 5, this.myVar: 104</span></span>
<span class="line"><span style="color:#A6ACCD;">Delegate obj, onCallback: 6, this.myVar: 105</span></span>
<span class="line"><span style="color:#A6ACCD;">setCallback(nullptr)</span></span></code></pre></div><h3 id="如何使用-cocos-creator-bindings-这层的类型转换辅助函数" tabindex="-1">如何使用 Cocos Creator bindings 这层的类型转换辅助函数？ <a class="header-anchor" href="#如何使用-cocos-creator-bindings-这层的类型转换辅助函数" aria-label="Permalink to &quot;如何使用 Cocos Creator bindings 这层的类型转换辅助函数？&quot;">​</a></h3><p>类型转换辅助函数位于 <code>cocos/bindings/manual/jsb_conversions.h</code> 中，其包含以下内容。</p><h4 id="se-value-转换为-c-类型" tabindex="-1">se::Value 转换为 C++ 类型 <a class="header-anchor" href="#se-value-转换为-c-类型" aria-label="Permalink to &quot;se::Value 转换为 C++ 类型&quot;">​</a></h4><p>支持基础类型 <code>int*t</code>/<code>uint*_t</code>/<code>float</code>/<code>double</code>/<code>const char*</code>/<code>bool</code>, <code>std::string</code>,绑定类型, 其容器类型 <code>std::vector</code>, <code>std::array</code>, <code>std::map</code>, <code>std::unordered_map</code> 等.</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool sevalue_to_native(const se::Value &amp;from, T *to, se::Object *ctx);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool sevalue_to_native(const se::Value &amp;from, T *to);</span></span></code></pre></div><h4 id="c-类型转换为-se-value" tabindex="-1">C++ 类型转换为 se::Value <a class="header-anchor" href="#c-类型转换为-se-value" aria-label="Permalink to &quot;C++ 类型转换为 se::Value&quot;">​</a></h4><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool nativevalue_to_se(const T &amp;from, se::Value &amp;to, se::Object *ctx);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool nativevalue_to_se(const T &amp;from, se::Value &amp;to);</span></span></code></pre></div><p><strong>3.6 之前的 以下这些转换函数已被弃用, 需要改为上面的两组函数</strong></p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool seval_to_int32(const se::Value &amp;v, int32_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_uint32(const se::Value &amp;v, uint32_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_int8(const se::Value &amp;v, int8_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_uint8(const se::Value &amp;v, uint8_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_int16(const se::Value &amp;v, int16_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_uint16(const se::Value &amp;v, uint16_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_boolean(const se::Value &amp;v, bool *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_float(const se::Value &amp;v, float *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_double(const se::Value &amp;v, double *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_size(const se::Value &amp;v, size_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_string(const se::Value &amp;v, std::string *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Vec2(const se::Value &amp;v, cc::Vec2 *pt);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Vec3(const se::Value &amp;v, cc::Vec3 *pt);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Vec4(const se::Value &amp;v, cc::Vec4 *pt);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Mat4(const se::Value &amp;v, cc::Mat4 *mat);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Size(const se::Value &amp;v, cc::Size *size);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_ccvalue(const se::Value &amp;v, cc::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_ccvaluemap(const se::Value &amp;v, cc::ValueMap *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_ccvaluemapintkey(const se::Value &amp;v, cc::ValueMapIntKey *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_ccvaluevector(const se::Value &amp;v, cc::ValueVector *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool sevals_variadic_to_ccvaluevector(const se::ValueArray &amp;args, cc::ValueVector *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_vector_string(const se::Value &amp;v, std::vector&lt;std::string&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_vector_int(const se::Value &amp;v, std::vector&lt;int&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_vector_uint16(const se::Value &amp;v, std::vector&lt;uint16_t&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_vector_float(const se::Value &amp;v, std::vector&lt;float&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_vector_Vec2(const se::Value &amp;v, std::vector&lt;cc::Vec2&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Uint8Array(const se::Value &amp;v, uint8_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_uintptr_t(const se::Value &amp;v, uintptr_t *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_std_map_string_string(const se::Value &amp;v, std::map&lt;std::string, std::string&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Data(const se::Value &amp;v, cc::Data *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_DownloaderHints(const se::Value &amp;v, cc::network::DownloaderHints *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_native_ptr(const se::Value&amp; v, T* ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_class&lt;T&gt;::value &amp;&amp; !std::is_same&lt;T, std::string&gt;::value, T&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_type(const se::Value &amp;v, bool &amp;ok);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_integral&lt;T&gt;::value, T&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_type(const se::Value &amp;v, bool &amp;ok);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_enum&lt;T&gt;::value, T&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_type(const se::Value &amp;v, bool &amp;ok);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_floating_point&lt;T&gt;::value, T&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_type(const se::Value &amp;v, bool &amp;ok);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_same&lt;T, std::string&gt;::value, T&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_type(const se::Value &amp;v, bool &amp;ok);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_pointer&lt;T&gt;::value &amp;&amp; std::is_class&lt;typename std::remove_pointer&lt;T&gt;::type&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_std_vector(const se::Value &amp;v, std::vector&lt;T&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;!std::is_pointer&lt;T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">seval_to_std_vector(const se::Value &amp;v, std::vector&lt;T&gt; *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">template&lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_Map_string_key(const se::Value&amp; v, cc::Map&lt;std::string, T&gt;* ret)</span></span></code></pre></div><p>改用 <code>sevalue_to_native</code></p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool int8_to_seval(int8_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool uint8_to_seval(uint8_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool int32_to_seval(int32_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool uint32_to_seval(uint32_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool int16_to_seval(uint16_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool uint16_to_seval(uint16_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool boolean_to_seval(bool v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool float_to_seval(float v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool double_to_seval(double v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool long_to_seval(long v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ulong_to_seval(unsigned long v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool longlong_to_seval(long long v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool uintptr_t_to_seval(uintptr_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool size_to_seval(size_t v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_string_to_seval(const std::string &amp;v, se::Value *ret); </span></span>
<span class="line"><span style="color:#A6ACCD;">bool Vec2_to_seval(const cc::Vec2 &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool Vec3_to_seval(const cc::Vec3 &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool Vec4_to_seval(const cc::Vec4 &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool Mat4_to_seval(const cc::Mat4 &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool Size_to_seval(const cc::Size &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool Rect_to_seval(const cc::Rect &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ccvalue_to_seval(const cc::Value &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ccvaluemap_to_seval(const cc::ValueMap &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ccvaluemapintkey_to_seval(const cc::ValueMapIntKey &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ccvaluevector_to_seval(const cc::ValueVector &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_vector_string_to_seval(const std::vector&lt;std::string&gt; &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_vector_int_to_seval(const std::vector&lt;int&gt; &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_vector_uint16_to_seval(const std::vector&lt;uint16_t&gt; &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_vector_float_to_seval(const std::vector&lt;float&gt; &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_map_string_string_to_seval(const std::map&lt;std::string, std::string&gt; &amp;v, se::Value *ret); </span></span>
<span class="line"><span style="color:#A6ACCD;">bool ManifestAsset_to_seval(const cc::extension::ManifestAsset &amp;v, se::Value *ret); </span></span>
<span class="line"><span style="color:#A6ACCD;">bool Data_to_seval(const cc::Data &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">bool DownloadTask_to_seval(const cc::network::DownloadTask &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;!std::is_base_of&lt;cc::Ref, T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">native_ptr_to_seval(T *v_c, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;!std::is_base_of&lt;cc::Ref, T&gt;::value &amp;&amp; !std::is_pointer&lt;T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">native_ptr_to_seval(T &amp;v_ref, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool native_ptr_to_rooted_seval(</span></span>
<span class="line"><span style="color:#A6ACCD;">    typename std::enable_if&lt;!std::is_base_of&lt;cc::Ref, T&gt;::value, T&gt;::type *v,</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;!std::is_base_of&lt;cc::Ref, T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">native_ptr_to_seval(T *vp, se::Class *cls, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;!std::is_base_of&lt;cc::Ref, T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">native_ptr_to_seval(T &amp;v_ref, se::Class *cls, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool native_ptr_to_rooted_seval(</span></span>
<span class="line"><span style="color:#A6ACCD;">    typename std::enable_if&lt;!std::is_base_of&lt;cc::Ref, T&gt;::value, T&gt;::type *v,</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::Class *cls, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_base_of&lt;cc::Ref, T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">native_ptr_to_seval(T *vp, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">typename std::enable_if&lt;std::is_base_of&lt;cc::Ref, T&gt;::value, bool&gt;::type</span></span>
<span class="line"><span style="color:#A6ACCD;">native_ptr_to_seval(T *vp, se::Class *cls, se::Value *ret, bool *isReturnCachedValue = nullptr);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool std_vector_to_seval(const std::vector&lt;T&gt; &amp;v, se::Value *ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">template &lt;typename T&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool seval_to_reference(const se::Value &amp;v, T **ret);</span></span></code></pre></div><p>改用 <code>nativelue_to_se</code></p><p>辅助转换函数不属于 <code>Script Engine Wrapper</code> 抽象层，属于 Cocos Creator 绑定层，封装这些函数是为了在绑定代码中更加方便的转换。每个转换函数都返回 <code>bool</code> 类型，表示转换是否成功，开发者如果调用这些接口，需要去判断这个返回值。</p><p>以上接口，直接根据接口名称即可知道具体的用法，接口中第一个参数为输入，第二个参数为输出参数。用法如下：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">se::Value v;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ok = nativevalue_to_se(100, v); // 第二个参数为输出参数，传入输出参数的地址</span></span></code></pre></div><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">int32_t v;</span></span>
<span class="line"><span style="color:#A6ACCD;">bool ok = sevalue_to_native(args[0], &amp;v); // 第二个参数为输出参数，传入输出参数的地址</span></span></code></pre></div><p>更多关于手动绑定的内容可参考 <a href="./jsb-manual-binding.html">使用 JSB 手动绑定</a>。</p><h2 id="自动绑定" tabindex="-1">自动绑定 <a class="header-anchor" href="#自动绑定" aria-label="Permalink to &quot;自动绑定&quot;">​</a></h2><h3 id="配置模块-ini-文件" tabindex="-1">配置模块 ini 文件 <a class="header-anchor" href="#配置模块-ini-文件" aria-label="Permalink to &quot;配置模块 ini 文件&quot;">​</a></h3><p>具体可以参考引擎目录下的 <code>tools/tojs/cocos.ini</code> 等 <code>ini</code> 配置。</p><h3 id="理解-ini-文件中每个字段的意义" tabindex="-1">理解 ini 文件中每个字段的意义 <a class="header-anchor" href="#理解-ini-文件中每个字段的意义" aria-label="Permalink to &quot;理解 ini 文件中每个字段的意义&quot;">​</a></h3><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 模块名称</span></span>
<span class="line"><span style="color:#89DDFF;">[cocos]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 绑定回调函数的前缀，也是生成的自动绑定文件的前缀</span></span>
<span class="line"><span style="color:#F07178;">prefix</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> engine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 绑定的类挂载在 JS 中的哪个对象中，类似命名空间</span></span>
<span class="line"><span style="color:#F07178;">target_namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> jsb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 自动绑定工具基于 Android 编译环境，此处配置 Android 头文件搜索路径</span></span>
<span class="line"><span style="color:#F07178;">android_headers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置 Android 编译参数</span></span>
<span class="line"><span style="color:#F07178;">android_flags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -target armv7-none-linux-androideabi -D_LIBCPP_DISABLE_VISIBILITY_ANNOTATIONS -DANDROID -</span><span style="color:#F07178;">D__ANDROID_API__</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">14 -gcc-toolchain %(gcc_toolchain_dir)s --</span><span style="color:#F07178;">sysroot</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">%(androidndkdir)s/platforms/android-14/arch-arm  -idirafter %(androidndkdir)s/sources/android/support/include -idirafter %(androidndkdir)s/sysroot/usr/include -idirafter %(androidndkdir)s/sysroot/usr/include/arm-linux-androideabi -idirafter %(clangllvmdir)s/lib64/clang/5.0/include -I%(androidndkdir)s/sources/cxx-stl/llvm-libc++/include</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置 clang 头文件搜索路径</span></span>
<span class="line"><span style="color:#F07178;">clang_headers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置 clang 编译参数</span></span>
<span class="line"><span style="color:#F07178;">clang_flags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -nostdinc -x c++ -</span><span style="color:#F07178;">std</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">c++17 -fsigned-char -</span><span style="color:#F07178;">mfloat-abi</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">soft -U__SSE__</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置引擎的头文件搜索路径</span></span>
<span class="line"><span style="color:#F07178;">cocos_headers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -I%(cocosdir)s/cocos -I%(cocosdir)s/cocos/platform/android -I%(cocosdir)s/external/sources</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置引擎编译参数</span></span>
<span class="line"><span style="color:#F07178;">cocos_flags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> -DANDROID -</span><span style="color:#F07178;">DCC_PLATFORM</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">3 -</span><span style="color:#F07178;">DCC_PLATFORM_MAC_IOS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1 -</span><span style="color:#F07178;">DCC_PLATFORM_MAC_OSX</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">4 -</span><span style="color:#F07178;">DCC_PLATFORM_WINDOWS</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">2 -</span><span style="color:#F07178;">DCC_PLATFORM_ANDROID</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置额外的编译参数</span></span>
<span class="line"><span style="color:#F07178;">extra_arguments</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> %(android_headers)s %(clang_headers)s %(cxxgenerator_headers)s %(cocos_headers)s %(android_flags)s %(clang_flags)s %(cocos_flags)s %(extra_flags)s</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要自动绑定工具解析哪些头文件</span></span>
<span class="line"><span style="color:#F07178;">headers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> %(cocosdir)s/cocos/platform/FileUtils.h %(cocosdir)s/cocos/platform/CanvasRenderingContext2D.h %(cocosdir)s/cocos/platform/Device.h %(cocosdir)s/cocos/platform/SAXParser.h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在生成的绑定代码中，重命名头文件</span></span>
<span class="line"><span style="color:#F07178;">replace_headers</span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要绑定哪些类，可以使用正则表达式，以空格为间隔</span></span>
<span class="line"><span style="color:#F07178;">classes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> FileUtils$ SAXParser CanvasRenderingContext2D CanvasGradient Device DownloaderHints</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 哪些类需要在 JS 层扩展，以空格为间隔</span></span>
<span class="line"><span style="color:#F07178;">classes_need_extend</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要为哪些类绑定属性，以逗号为间隔</span></span>
<span class="line"><span style="color:#F07178;">field</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要忽略绑定哪些类，以逗号为间隔</span></span>
<span class="line"><span style="color:#F07178;">skip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> FileUtils::[getFileData setFilenameLookupDictionary destroyInstance getFullPathCache getContents listFilesRecursively],</span></span>
<span class="line"><span style="color:#A6ACCD;">        SAXParser::[(?!(init))],</span></span>
<span class="line"><span style="color:#A6ACCD;">        Device::[getDeviceMotionValue],</span></span>
<span class="line"><span style="color:#A6ACCD;">        CanvasRenderingContext2D::[setCanvasBufferUpdatedCallback set_.+ fillText strokeText fillRect measureText],</span></span>
<span class="line"><span style="color:#A6ACCD;">        Data::[takeBuffer getBytes fastSet copy],</span></span>
<span class="line"><span style="color:#A6ACCD;">        Value::[asValueVector asValueMap asIntKeyMap]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 需要为哪些类绑定访问属性，以逗号为间隔</span></span>
<span class="line"><span style="color:#F07178;">getter_setter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> CanvasRenderingContext2D::[width//setWidth height//setHeight fillStyle//setFillStyle font//setFont globalCompositeOperation//setGlobalCompositeOperation lineCap//setLineCap lineJoin//setLineJoin lineWidth//setLineWidth strokeStyle//setStrokeStyle textAlign//setTextAlign textBaseline//setTextBaseline]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重命名函数，以逗号为间隔</span></span>
<span class="line"><span style="color:#F07178;">rename_functions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> FileUtils::[</span><span style="color:#F07178;">loadFilenameLookupDictionaryFromFile</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">loadFilenameLookup]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重命名类，以逗号为间隔</span></span>
<span class="line"><span style="color:#F07178;">rename_classes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SAXParser::PlistParser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置哪些类不需要搜索其父类</span></span>
<span class="line"><span style="color:#F07178;">classes_have_no_parents</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SAXParser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置哪些父类需要被忽略</span></span>
<span class="line"><span style="color:#F07178;">base_classes_to_skip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Ref Clonable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置哪些类是抽象类，抽象类没有构造函数，即在 js 层无法通过 var a = new SomeClass();的方式构造 JS 对象</span></span>
<span class="line"><span style="color:#F07178;">abstract_classes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> SAXParser Device</span></span></code></pre></div><p>更多关于自动绑定的内容可参考 <a href="./jsb-auto-binding.html">使用 JSB 自动绑定</a>。</p><h2 id="远程调试与-profile" tabindex="-1">远程调试与 Profile <a class="header-anchor" href="#远程调试与-profile" aria-label="Permalink to &quot;远程调试与 Profile&quot;">​</a></h2><p>默认远程调试和 Profile 是在 debug 模式中生效的，如果需要在 release 模式下也启用，需要手动修改构建原生平台后生成的文件 <code>native/engine/common/CMakeLists.txt</code> 中的宏开关。</p><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NOT</span><span style="color:#A6ACCD;"> RES_DIR)</span></span>
<span class="line"><span style="color:#89DDFF;">    message</span><span style="color:#A6ACCD;">(FATAL_ERROR </span><span style="color:#C3E88D;">&quot;RES_DIR is not set!&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">endif</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">include</span><span style="color:#A6ACCD;">(\${RES_DIR}/proj/cfg.cmake)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NOT</span><span style="color:#A6ACCD;"> COCOS_X_PATH)</span></span>
<span class="line"><span style="color:#89DDFF;">    message</span><span style="color:#A6ACCD;">(FATAL_ERROR </span><span style="color:#C3E88D;">&quot;COCOS_X_PATH is not set!&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">endif</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span></code></pre></div><p>改为：</p><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NOT</span><span style="color:#A6ACCD;"> RES_DIR)</span></span>
<span class="line"><span style="color:#89DDFF;">    message</span><span style="color:#A6ACCD;">(FATAL_ERROR </span><span style="color:#C3E88D;">&quot;RES_DIR is not set!&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">endif</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">include</span><span style="color:#A6ACCD;">(\${RES_DIR}/proj/cfg.cmake)</span></span>
<span class="line"><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;">(USE_V8_DEBUGGER_FORCE </span><span style="color:#89DDFF;">ON</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">## 覆盖 USE_V8_DEBUGGER_FORCE 的值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NOT</span><span style="color:#A6ACCD;"> COCOS_X_PATH)</span></span>
<span class="line"><span style="color:#89DDFF;">    message</span><span style="color:#A6ACCD;">(FATAL_ERROR </span><span style="color:#C3E88D;">&quot;COCOS_X_PATH is not set!&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">endif</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ...</span></span></code></pre></div><p>再修改 <code>native/engine/common/Classes/Game.cpp</code></p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#if CC_DEBUG</span></span>
<span class="line"><span style="color:#A6ACCD;">  _debuggerInfo.enabled = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">#else</span></span>
<span class="line"><span style="color:#A6ACCD;">  _debuggerInfo.enabled = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 覆盖配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  _debuggerInfo.enabled = true;</span></span></code></pre></div><h3 id="chrome-远程调试-v8" tabindex="-1">Chrome 远程调试 V8 <a class="header-anchor" href="#chrome-远程调试-v8" aria-label="Permalink to &quot;Chrome 远程调试 V8&quot;">​</a></h3><h4 id="windows-mac" tabindex="-1">Windows/Mac <a class="header-anchor" href="#windows-mac" aria-label="Permalink to &quot;Windows/Mac&quot;">​</a></h4><ul><li><p>编译、运行游戏（或在 Creator 中直接使用模拟器运行）</p></li><li><p>用 Chrome 浏览器打开 <a href="devtools://devtools/bundled/js_app.html?v8only=true&amp;ws=127.0.0.1:5086/00010002-0003-4004-8005-000600070008" target="_blank" rel="noreferrer">devtools://devtools/bundled/js_app.html?v8only=true&amp;ws=127.0.0.1:5086/00010002-0003-4004-8005-000600070008</a>。（若使用的是旧版 Chrome，则需要将地址开头的 <code>devtools</code> 改成 <code>chrome-devtools</code>）</p></li><li><p>断点调试：</p><p><img src="`+p+'" alt=""></p></li><li><p>抓取 JS Heap：</p><p><img src="'+o+'" alt=""></p></li><li><p>Profile：</p><p><img src="'+t+`" alt=""></p></li></ul><h4 id="android-ios" tabindex="-1">Android/iOS <a class="header-anchor" href="#android-ios" aria-label="Permalink to &quot;Android/iOS&quot;">​</a></h4><ul><li><p>保证 Android/iOS 设备与 PC 或者 Mac 在同一个局域网中</p></li><li><p>编译，运行游戏</p></li><li><p>用 Chrome 浏览器打开 <a href="devtools://devtools/bundled/js_app.html?v8only=true&amp;ws=xxx.xxx.xxx.xxx:6086/00010002-0003-4004-8005-000600070008" target="_blank" rel="noreferrer">devtools://devtools/bundled/js_app.html?v8only=true&amp;ws=xxx.xxx.xxx.xxx:6086/00010002-0003-4004-8005-000600070008</a>，其中 <code>xxx.xxx.xxx.xxx</code> 为局域网中 Android/iOS 设备的 IP 地址。（若使用的是旧版 Chrome，则需要将地址开头的 <code>devtools</code> 改成 <code>chrome-devtools</code>）</p></li><li><p>调试界面与 Windows 相同</p></li></ul><h2 id="q-a" tabindex="-1">Q &amp; A <a class="header-anchor" href="#q-a" aria-label="Permalink to &quot;Q &amp; A&quot;">​</a></h2><h3 id="se-scriptengine-与-scriptingcore-的区别-为什么还要保留-scriptingcore" tabindex="-1">se::ScriptEngine 与 ScriptingCore 的区别，为什么还要保留 ScriptingCore? <a class="header-anchor" href="#se-scriptengine-与-scriptingcore-的区别-为什么还要保留-scriptingcore" aria-label="Permalink to &quot;se::ScriptEngine 与 ScriptingCore 的区别，为什么还要保留 ScriptingCore?&quot;">​</a></h3><p>在 1.7 中，抽象层被设计为一个与引擎没有关系的独立模块，对 JS 引擎的管理从 ScriptingCore 被移动到了 <code>se::ScriptEngine</code> 类中，ScriptingCore 被保留下来是希望通过它把引擎的一些事件传递给封装层，充当适配器的角色。</p><p>ScriptingCore 只需要在 AppDelegate 中被使用一次即可，之后的所有操作都只需要用到 <code>se::ScriptEngine</code>。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool AppDelegate::applicationDidFinishLaunching()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    director-&gt;setAnimationInterval(1.0 / 60);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这两行把 ScriptingCore 这个适配器设置给引擎，用于传递引擎的一些事件，</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 比如 Node 的 onEnter, onExit, Action 的 update，JS 对象的持有与解除持有</span></span>
<span class="line"><span style="color:#A6ACCD;">    ScriptingCore* sc = ScriptingCore::getInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ScriptEngineManager::getInstance()-&gt;setScriptEngine(sc);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    se::ScriptEngine* se = se::ScriptEngine::getInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="se-object-root-unroot-与-se-object-incref-decref-的区别" tabindex="-1"><code>se::Object::root/unroot</code> 与 <code>se::Object::incRef/decRef</code> 的区别? <a class="header-anchor" href="#se-object-root-unroot-与-se-object-incref-decref-的区别" aria-label="Permalink to &quot;\`se::Object::root/unroot\` 与 \`se::Object::incRef/decRef\` 的区别?&quot;">​</a></h3><p><code>root</code>/<code>unroot</code> 用于控制 JS 对象是否受 GC 控制，root 表示不受 GC 控制，unroot 则相反，表示交由 GC 控制，对一个 <code>se::Object</code> 来说，<code>root</code> 和 <code>unroot</code> 可以被调用多次，<code>se::Object</code> 内部有 <code>_rootCount</code> 变量用于表示 <code>root</code> 的次数。当 <code>unroot</code> 被调用，且 <code>_rootCount</code> 为 0 时，<code>se::Object</code> 关联的 JS 对象将交由 GC 管理。还有一种情况，即如果 <code>se::Object</code> 的析构被触发了，如果 <code>_rootCount &gt; 0</code>，则强制把 JS 对象交由 GC 控制。</p><p><code>incRef</code>/<code>decRef</code> 用于控制 <code>se::Object</code> 这个 <code>cpp</code> 对象的生命周期，前面章节已经提及，建议用户使用 <code>se::HandleObject</code> 来控制 <strong>手动创建非绑定对象</strong> 的方式控制 <code>se::Object</code> 的生命周期。因此，一般情况下，开发者不需要接触到 <code>incRef</code>/<code>decRef</code>。</p><h3 id="对象生命周期的关联与解除关联" tabindex="-1">对象生命周期的关联与解除关联 <a class="header-anchor" href="#对象生命周期的关联与解除关联" aria-label="Permalink to &quot;对象生命周期的关联与解除关联&quot;">​</a></h3><p>使用 <code>se::Object::attachObject</code> 关联对象的生命周期<br> 使用 <code>se::Object::dettachObject</code> 解除对象的生命周期。</p><p><code>objA-&gt;attachObject(objB);</code> 类似于 JS 中执行 <code>objA.__nativeRefs[index] = objB</code>，只有当 objA 被 GC 后，objB 才有可能被 GC。<br><code>objA-&gt;dettachObject(objB);</code> 类似于 JS 中执行 <code>delete objA.__nativeRefs[index];</code>，这样 objB 的生命周期就不受 objA 控制了。</p><h3 id="请不要在栈-stack-上分配-cc-refcounted-的子类对象" tabindex="-1">请不要在栈（Stack）上分配 cc::RefCounted 的子类对象 <a class="header-anchor" href="#请不要在栈-stack-上分配-cc-refcounted-的子类对象" aria-label="Permalink to &quot;请不要在栈（Stack）上分配 cc::RefCounted 的子类对象&quot;">​</a></h3><p>Ref 的子类必须在堆（Heap）上分配，即通过 <code>new</code>，然后通过 <code>release</code> 来释放。当 JS 对象的 finalize 回调函数中统一使用 <code>release</code> 来释放。如果是在栈上的对象，reference count 很有可能为 0，而这时调用 <code>release</code>，其内部会调用 <code>delete</code>，从而导致程序崩溃。所以为了防止这个行为的出现，开发者可以在继承于 <code>cc::RefCounted</code> 的绑定类中，标识析构函数为 <code>protected</code> 或者 <code>private</code>，保证在编译阶段就能发现这个问题。</p><p>例如：</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class CC_EX_DLL EventAssetsManagerEx : public EventCustom</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">public:</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">private:</span></span>
<span class="line"><span style="color:#A6ACCD;">    virtual ~EventAssetsManagerEx() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">EventAssetsManagerEx event(...); // 编译阶段报错</span></span>
<span class="line"><span style="color:#A6ACCD;">dispatcher-&gt;dispatchEvent(&amp;event);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 必须改为</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">EventAssetsManagerEx* event = new EventAssetsManagerEx(...);</span></span>
<span class="line"><span style="color:#A6ACCD;">dispatcher-&gt;dispatchEvent(event);</span></span>
<span class="line"><span style="color:#A6ACCD;">event-&gt;release();</span></span></code></pre></div><h3 id="如何监听脚本错误" tabindex="-1">如何监听脚本错误 <a class="header-anchor" href="#如何监听脚本错误" aria-label="Permalink to &quot;如何监听脚本错误&quot;">​</a></h3><p>在 AppDelegate.cpp 中通过 <code>se::ScriptEngine::getInstance()-&gt;setExceptionCallback(...)</code> 设置 JS 层异常回调。</p><div class="language-c++"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bool AppDelegate::applicationDidFinishLaunching()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    se::ScriptEngine* se = se::ScriptEngine::getInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    se-&gt;setExceptionCallback([](const char* location, const char* message, const char* stack){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // Send exception information to server like Tencent Bugly.</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    jsb_register_all_modules();</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,155),i=[r];function C(A,y,D,d,u,b){return n(),l("div",null,i)}const v=a(c,[["render",C]]);export{m as __pageData,v as default};

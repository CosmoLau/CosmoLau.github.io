# CosmoLau 的个人博客

这里是我的个人博客项目，博客由 [Hexo](https://hexo.io/zh-cn/) 搭建，使用 [vivia](https://github.com/saicaca/hexo-theme-vivia) 作为博客主题，通过 GitHub Page 进行部署。

## GitHub Action 部署

本仓库已经配置 GitHub Action 进行自动化部署，如果需要手动部署，请参参考下文[手动部署](#手动部署)。

## 手动部署

> 使用前需要确保安装了 Node

克隆本仓库

```shell
git clone https://github.com/CosmoLau/CosmoLau.github.io.git
```

安装依赖

```shell
npm install
```

全局安装 Hexo

```shell
npm install -g hexo-cli
```

> _注意_：也可以局部安装 Hexo，使用时需要用 `npx hexo <command>`

生成页面

```shell
hexo g
```

本地调试

```shell
hexo s
```

部署到 GitHub Page

```shell
hexo d
```

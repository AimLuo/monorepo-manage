## 项目说明
1. 本项目基于[umijs/father](https://github.com/umijs/father)，用来开发**公用模块**
2. 使用[lerna](https://github.com/lerna/lerna) + [yarn workspace](https://yarnpkg.com/zh-Hans/docs/workspaces)管理多模块
3. 支持开发`umi`生态，组件，工具等
4. 开发的组件更适用于`antd-pro`等`umi`环境下的项目
> 开发的`packages`会被发布到[私有仓库](#私有仓库)  
> **警告**：本项目尚未应用于生产环境，一切正在测试中
## 使用说明
TODO:
## 本项目构建记录
记录了创建该项目时的一些流程，提供一些[参考](./docs/index.md)

## 私有仓库
使用 [verdaccio](https://github.com/verdaccio/verdaccio) 搭建，具体操作不做赘述  
如果没有条件搭建私有仓库，可以通过：
1. 使用`yarn link`命令（已验证生产，不推荐）
2. 使用`yarn workspace` + `git subtree`（已验证生产，推荐）
3. 在`lerna publish`生命周期中执行脚本发布到`git`仓库，使用`yarn add <git remote url>`添加依赖（未开发，未验证）

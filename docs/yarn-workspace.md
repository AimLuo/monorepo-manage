## 包的第三方依赖包管理:
1. 切换到对应的包使用`yarn`来添加
2. `yarn workspace <workspace_name> <command>`
3. 使用`lerna`的`add`命令来添加
4. 使用`lerna`的`exec`命令来添加
## 包的相互引用：
使用[lerna add](https://github.com/lerna/lerna/tree/master/commands/add#readme)命令
> 直接使用`yarn` add或者`yarn` workspace等会找不到这个依赖包

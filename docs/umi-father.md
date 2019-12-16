## 多包入口问题：
[源码地址](https://github.com/umijs/father/blob/b617c8adb94480d773dbdc9762dc9415ff6715a8/packages/father-build/src/build.ts#L193)  
源码指向的master分支，可能代码会改变，这里拷贝下来：
```javascript
const userConfig = getUserConfig({ cwd });
let pkgs = readdirSync(join(cwd, 'packages'));
// support define pkgs in lerna
if (userConfig.pkgs) {
  pkgs = userConfig.pkgs;
}
// 支持 scope
pkgs = pkgs.reduce((memo, pkg) => {
  const pkgPath = join(cwd, 'packages', kg);
  if (statSync(pkgPath).isDirectory()) {
  // 注意这里
    if (pkg.startsWith('@')) {
      readdirSync(join(cwd, 'packages', pkg)).filter(subPkg => {
        if (statSync(join(cwd, 'packages', pkg, subPkg)).isDirectory()) {
          memo = memo.concat(`${pkg}/${subPkg}`);
        }
      });
    } else {
      memo = memo.concat(pkg);
    }
  }
  return memo;
}, []);
```

## 多包打包问题 
`father`默认打包顺序是按文件夹名称顺序，  
我们项目中`my-test`是排在`umi-origin-test`的，  
此时`father`会先打包`my-test`，
但是`my-test`引用了`umi-origin-test`，这时打包就会报错或者获取不到最新的`umi-origin-test`代码  
所以`father`提供了`pkgs`配置来管理打包优先级，但是它不能传以下格式的包，否则会报错，我们看上面的源码也知道原因  
`pkgs: ['@demo/umi-origin-test', '@demo/my-test']`,[issues](https://github.com/umijs/father/issues/175#L195)  
### 所以我们的解决办法是：  
临时配置pkgs为（其实也可以不配置，我这里只是为了排除其他包的影响，也是为了演示上面源码的逻辑）：
`pkgs: ['@demo']`,  
然后**运行两次**`yarn build`  
当然还有其他方式解决，如：  
在每个包中添加`father build`命令  
添加这个命令的时候记得在当前包中添加`father`依赖（参考`lerna`添加方式或者`yarn workspace`方式），  
此时会在当前包创建`node_modules`文件夹，在其中创建`father`的`bin`脚本指引  
然后用`lerna run`命令来执行，  
但是不推荐这种方式，这种方式有悖`umi-father`的设计思路

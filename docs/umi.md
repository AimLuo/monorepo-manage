## 步骤
1. `yarn add umi -D -W`
2. 我们使用`pages`来作为预览开发位置，这样更符合[umi](https://umijs.org/zh/)的配置
3. 后续操作参考[parcel](./parcle.md)
4. 增加.umirc.js文件  
    根目录：
    ```js
    module.exports = {
      outputPath: './dist/preview',
      plugins: [
        [
          'umi-plugin-react',
          {
            // 自动按需引入antd的前置样式和组件对应的样式，无需我们手动引入
            antd: true,
          },
        ],
      ],
    };
    ```
    包：
    ```js
    module.exports = {
      outputPath: './dist/preview',
      plugins: [
        [
          'umi-plugin-react',
          {
            antd: true,
          },
        ],
      ],
    };
    ```
5. 项目包添加`antd`为`peerDependencies`  
    `rollup`不需要打包`antd`，我们自行在业务项目中安装这个依赖
6. 具体可以参考代码`packages/components`

## 步骤
1. 安装[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)扩展
2. 启用保存自动格式化  
    直接在设置中搜索`editor.codeActionsOnSave`，然后添加：
    ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
    ```
    对于`2.0.4`以下版本设置中找到`eslint`扩展，勾选保存自动修复格式化，会在`setting.json`中添加：
    ```json
      "eslint.autoFixOnSave": true
    ```
3. 新建`.eslintrc.js`  
    不使用扩展的创建功能，我们直接使用@umijs/fabric，配置如下：
    ```javascript
    module.exports = {
      extends: [require.resolve('@umijs/fabric/dist/eslint')],
      globals: {
        ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
        page: true,
      },
    };
    ```
4. 新建`.eslintignore`忽略文件
    ```
    # 参考ant-design-pro-layout
    /lambda/mock/**
    /scripts
    /config
    /example
    _test_
    /node_modules
    /es
    /lib
    ```
## TODO
- [ ] 需要阅读扩展[文档](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

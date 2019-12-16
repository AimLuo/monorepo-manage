## 步骤
1. 安装扩展[stylelint-plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)
2. 启用保存自动格式化
    设置中找到`stylelint`扩展，勾选自动格式化，会在`setting.json`中增加以下字段
    ```json
    "stylelint.autoFixOnSave": true
    ```
3. 新建.stylelintrc.js
    ```javascript
    // 参考ant-design-pro-layout
    const fabric = require('@umijs/fabric');
    module.exports = {
      ...fabric.stylelint,
    };
    ```

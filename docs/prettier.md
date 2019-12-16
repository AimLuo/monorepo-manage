## 步骤
1. 安装[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. 设置为默认格式化工具：
    ```json
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    ```
3. 设置保存时自动格式化
    - 打开设置，搜索`format on save`，勾选
    - 只有正确[配置](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)了，才能保证跟`eslint`的自动格式化不冲突
    - 如果不想所有文件都自动格式化，可以设置为：
    ```json
    "editor.formatOnSave": false,
    "[javascript]": {
      "editor.formatOnSave": true
    }
    ```
4. 修改配置文件`.prettierrc.js`
    使用@umijs/fabric的规则：
    ```javascript
    const fabric = require('@umijs/fabric');
    module.exports = {
      ...fabric.prettier,
    };
    ```
5. 修改忽略文件`.prettierignore`
    参考`antd-pro`
    ```
    # create-umi时自动生成的文件
    **/*.md
    **/*.mdx
    package.json
    .umi
    .umi-production
    # 忽略配置文件
    .editorconfig
    .eslintcache
    .eslintignore
    .dockerignore
    .gitignore
    .prettierignore
    # 手动增加。其实没必要添加这些，因为我们一般不会手动去修改这些文件，这样不会触发编辑器保存时的自动修复。
    # 而这些文件我们在gitignore中已经忽略过了，不会被提交，而pre-commit时的操作我们只
    针对暂存区（lint-staged）的文件，所以也没有影响
    dist
    node_modules
    .DS_Store
    *.png
    *.toml
    docker
    Dockerfile*
    LICENSE
    *.lock
    yarn-error.log
    package-lock.json
    # 还可以添加其他
    ```

## 注意
1. `prettier`的扩展运行依赖于本地项目中`prettier`，如果本项目没有，请先安装：npm install prettier -D
2. 支持插件，插件也要安装在项目中
3. 推荐使用配置文件来设置`prettier`，直接设置编辑器是在没有项目的时候用。
4. 配置文件从当前格式化的那个文件路径向上查找
5. 在编辑器中配置的`prettier`只能针对扩展生效。不能在命令行中起作用。
6. 可以在全局放置一个配置文件，针对`linux`的路径为：`~/.prettierrc`
7. 配置了扩展的[prettier.configPath](https://github.com/prettier/prettier-vscode#prettierconfigpath)的将忽略项目中的配置
8. 使用了配置文件时，`vscode`中的`prettier`的配置无用。
9. 最佳的方法是让`prettier`处理格式化，让`linter`处理语法

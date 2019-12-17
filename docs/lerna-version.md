## 步骤
1. 关联远程仓库（如果已经关联可以跳过）
    ```sh
    git remote add origin
    ```
2. 修改`lerna.json`配置为：
    ```js
    {
      "packages": ["packages/@demo/*", "packages/components"],
      "version": "independent",
      "npmClient": "yarn",
      "useWorkspaces": true,
      "ignoreChanges": ["**/__fixtures__/**", "**/__tests__/**", "**/*.md", "**/example/**"],//这个配置会影响lerna version/diff/changed
      "command": {
        "version": {
          "exact": true, // 包之间的相互引用使用确定的版本，而不是^这种兼容版本
          "message": "chore(release): publish",
          "conventionalCommits": true  // 根据commit自动选择版本号以及生成changelog
        }
      },
      "publishConfig": {
        "access": "public", // 支持发布@demo/foo这种scope包
        "directory": "dist",// 发布dist文件夹，虽然我们在项目中定义了
        "registry": "http://221.213.48.54:8180/pkg/"// 发布到指定的仓库，如果不指定会默认使用当前npm镜像地址，如果npmClient设置为：yarn，则会取yarn的镜像地址
      }
    }
    ```
3. package.json添加命令：
	"lerna:p": "lerna publish --no-push --no-commit-hooks",
	"lerna:v":"lerna version --no-push --no-commit-hooks",
		a. --no-push为了防止错误提交，稍后我们自行提交
		b. --no-commit-hooks为了不触发git hooks走一遍代码监测
## 用法
可以先用`yarn lerna changed`查看哪些包有更改可发布。
### `lerna version`（更新包的版本号）
- 执行`yarn lerna:v` 会修改各包的版本号以及包的引用关系，
- 会新增一个`commit`为你配置的`message：chore(release): publish`
- 会为每个更改的包打上`tag`  
> 如果不想新增一个`commit`，可是使用`--amend`，就会把当前`package.json`的修改合并到上一次提交  
> 如果不想打上`tag`，可以加上`--no-git-tag-version`，但是此时也不会触发的`commit`，意味着`--amend`不生效，需要自己自行`commit`

### `lerna publish`（发布包）
1. 没有执行过`yarn lerna:v`
	此时我们可以直接执行`yarn lerna:p`，此时会自动触发lerna version
2. 执行过`yarn lerna:v`，并且没有其他改动
	直接执行`yarn lerna:p`会提示没有可以发布的，我们使用`yarn lerna:p from-git`命令即可
3. 执行过`yarn lerna:v`，并且有其他改动
	直接执行`yarn lerna:p`会提示没有可以发布的，我们使用`yarn lerna:p from-package`命令即可

## 注意
1. `lerna`使用需要自行查阅文档，配置以及`cli`需要自行实验之后了解
2. 重点关注`lerna add，lerna version，lerna publish`
3. 建议在本地搭建`npm`仓库测试，使用[verdaccio](https://github.com/verdaccio/verdaccio)可以一行命令完成本地搭建

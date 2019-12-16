# [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 
1. 即约定式提交，这个约定与 [SemVer](https://semver.org/) 相吻合。
2. 这个规范衍生自[Angular 团队的规范](https://link.zhihu.com/?target=https%3A//github.com/angular/angular.js/blob/master/DEVELOPERS.md%23-git-commit-guidelines)，以适用于大多数工具
## 规范与语义说明
自行看[文档](https://www.conventionalcommits.org/en/v1.0.0/)
## 用法
虽然我们可以自行按照上面的规定手动输入`commit`信息（例如 `feat(parser): adds ability to parse arrays`），但是对于不熟练的开发者来说，推荐使用辅助提交工具。
### 普通项目（库）
其实在类库的开发中我们才更有必要commit的规范化，普通的业务代码项目没有必要。
1. `yarn add committizen cz-conventional-changelog`  
	`committizen`就是指的[commitizen/cz-cli](https://link.zhihu.com/?target=https%3A//github.com/commitizen/cz-cli)，提供了`git cz`命令来代替`git commit`命令，以询问的方式填写`commit`信息  
	cz-conventional-changelog可以为committizen指定我们以Angular 约定来填入commit信息
2. 配置 `package.json`
```json
"scripts": {
    "c": "git-cz"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
},
```
	
3. 下次提交时，我们只需执行`yarn c`就可以按提示填入`commit`信息，最后生成标准的约定的提交格式
### lerna项目
lerna项目多了一些类型和描述
1. `yarn add committizen cz-lerna-changelog`
  [cz-lerna-changelog](https://github.com/atlassian/cz-lerna-changelog)继承自[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)，添加了一些适用于lerna的类型和项目选择
2. 后面基本一样，只是多了一个项目选择，自己按提示操作即可

## 校验commit信息是否符合规范
普通项目（库）
1. `yarn add @commitlint/config-conventional @commitlint/cli -D -W`  
[validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg)也可以验证，不过这个已经不推荐使用，我们使用[commitlint](https://commitlint.js.org/#/)  
[@commitlint/prompt-cli](https://www.npmjs.com/package/@commitlint/prompt-cli)类似[commitizen/cz-cli](https://github.com/commitizen/cz-cli)，但是用[@commitlint/prompt-cli](https://www.npmjs.com/package/@commitlint/prompt-cli)功能更强大
2. 添加commitlint.config.js配置
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {},
};
```
3. 添加`hooks`
    在`husky`的配置加入`CommitlIint`配置，v1.0.1版本以后为HUSKY_GIT_PARAMS，v0.14.3为GIT_PARAMS，文档
```json
"husky": {
  "hooks": {
    "commit-msg":"commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

lerna项目
> 个人建议不用`@commitlint/config-lerna-scopes`，因为不好用
1. `yarn add @commitlint/config-conventional @commitlint/cli @commitlint/config-lerna-scopes -D -W`  
    使用[@commitlint/config-lerna-scopes](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-lerna-scopes)，强制包名作为`scope`，不传scope表示影响全部

2. 添加`commitlint.config.js`配置
```js
module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  rules: {},
};
```
3. 同上

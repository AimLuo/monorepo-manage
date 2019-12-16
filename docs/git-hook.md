## 目的
1. 为了在`commit`时格式化代码
2. 限制`commit`提交格式：[约定式提交](./conventional-commits.md)自动生成`log`
## 添加`commit`辅助工具
看[约定式提交](./conventional-commits.md)
## 添加`commit-msg`信息校验工具
看[约定式提交](./conventional-commits.md)
## 增加`pre-commit`时代码格式校验
1. `yarn add lint-staged -D -W`
    > `lint-staged`工具会将暂存区的文件暴露给对应的工具
2. 添加脚本命令  
    `"lint-staged:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty"`
3. 添加配置
    ```json
    "husky": {
	    "hooks": {
	      "pre-commit": "lint-staged",
	      "commit-msg": "validate-commit-msg"
	    }
	  },
	  
	    "lint-staged": {
	    "**/*.less": "stylelint --syntax less",
	    "**/*.{js,jsx,tsx,ts,less,md,json}": [
	      "prettier --write",
	      "git add"
	    ],
	    "**/*.{js,jsx}": "yarn run lint-staged:js",
	    "**/*.{js,ts,tsx}": "yarn run lint-staged:js",
	    "yarn.lock": [
	      "git rm --cached"
	    ]
	  },
    ```
- 里面的工具会自己获取项目中的配置文件，不用我们指定。
- `prettier`工具会通过`--write`获取到`lint-staged`传给它的文件，然后校验并尝试修复
- 修复失败则在控制台提示，并中断进程
- 修复成功添加暂存区然后交给个`eslint`处理，
- 我们配置的`eslint`只会校验是否有错误，不去尝试修复，如果有错误会在控制台输出
- 防止添加`yarn.lock`文件（其实可以不要这条，视情况而定）

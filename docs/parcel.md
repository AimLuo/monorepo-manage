## 配置
1. 添加`parcel`依赖
```sh
yarn add parcel-bundler -D -W
```
## 预览界面
1. 根目录新建`example`文件夹以及各种文件(自行参考`parcel`文档)
2. 修改`package.json`增加
```json
"preview:dev":"parcel ./example/index.html --port=2001 -d example/dist",
"preview:build":"parcel build ./example/index.html --public-url ./ -d dist/example"
```
## 组件调试界面
1. 组件中的新建`example`文件夹以及各种文件
2. 修改`package.json`增加
```json
"parcel:dev":"parcel ./example/index.html -d example/dist"
```

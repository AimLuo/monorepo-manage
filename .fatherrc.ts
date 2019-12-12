import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  // @ts-ignore
  doc: {
    menu: [
      { name: '前言', route: '/' },
      {
        name: '示例',
        menu: [
          {
            name: 'umi-origin-test',
          },
          {
            name: 'my-test',
          },
        ],
      },
      {
        name: '组件库',
        menu: [
          {
            name: '前言',
            route: '/@ml/rc',
          },
        ],
      },
    ],
    // 改为这个主题是因为docz-them-umi有各种bug
    theme: 'docz-theme-ztopia',
    typescript: true,
    src: 'packages/',
    port: 2000,
    dest: 'dist/docs',
    title: '单体式仓库',
    themeConfig: {
      // logo: {
      //   src: './public/logo.png',
      // },
      // 貌似没什么卵用
      // showMarkdownEditButton: false,
      // showPlaygroundEditor: false,
      // 代码主题，配合dracula.css使用
      // codemirrorTheme: 'dracula',
    },
    //@ts-ignore
    // docz文档中遗漏了这个配置项
    htmlContext: {
      // @ts-ignore
      // head: {
      //   links: [
      //     {
      //       rel: 'stylesheet',
      //       href: 'https://codemirror.net/theme/dracula.css',
      //     },
      //   ],
      // },
    },
  },
  // 这种方式打包会报错，所以无解https://github.com/umijs/father/issues/175#L195
  // 更加是否有lerna.json文件来决定是否启用这个配置，看源码就知道
  // pkgs: ['@demo/umi-origin-test', '@demo/my-test'],
};

export default options;

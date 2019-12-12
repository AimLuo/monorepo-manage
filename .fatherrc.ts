import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  cjs: 'rollup',
  esm: 'rollup',
  // @ts-ignore
  doc: { typescript: true, src: 'packages/' },
  // 这种方式打包会报错，所以无解https://github.com/umijs/father/issues/175#L195
  // pkgs: ['@demo/umi-origin-test', '@demo/my-test'],
};

export default options;

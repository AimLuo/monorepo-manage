import React from 'react';
import { Layout } from 'antd';
// import 'antd/es/layout/style/index.less'; // 因为使用了umi-plugin-react，所以我们不需要自己引入样式

export default function(props) {
  return <Layout>{props.children}</Layout>;
}

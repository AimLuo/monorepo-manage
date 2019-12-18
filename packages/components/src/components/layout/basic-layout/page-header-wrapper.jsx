import React from 'react';
import { PageHeader, Tabs, Button } from 'antd';

const { TabPane } = Tabs;

const routes = [
  {
    path: 'index',
    breadcrumbName: '首页',
  },
  {
    path: 'first',
    breadcrumbName: '第二及',
  },
  {
    path: 'second',
    breadcrumbName: '第三季',
  },
];
export default function() {
  return (
    <PageHeader
      style={{
        backgroundColor: '#fff',
      }}
      title="页面标题"
      onBack={() => window.history.back()}
      breadcrumb={{ routes }}
      subTitle="页面小标题"
      extra={<Button>其他操作</Button>}
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab="测试1" key="1" />
          <TabPane tab="测试2" key="2" />
        </Tabs>
      }
    />
  );
}

﻿---
title: 业务组件
sidemenu: false
---

> 此功能由[dumi](https://d.umijs.org/zh-CN/guide/advanced#umi-%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90%E6%A8%A1%E5%BC%8F)提供，dumi 是一个 📖 为组件开发场景而生的文档工具，用过的都说好。

# 业务组件

这里列举了 Pro 中所有用到的组件，这些组件不适合作为组件库，但是在业务中却真实需要。所以我们准备了这个文档，来指导大家是否需要使用这个组件。

## HeaderDropdown 头部下拉列表

HeaderDropdown 是 antd Dropdown 的封装，但是增加了移动端的特殊处理，用法也是相同的。

```tsx
/**
 * background: '#f0f2f5'
 */
import { Button, Menu } from 'antd';
import React from 'react';
import HeaderDropdown from '@/components/HeaderDropdown';

export default () => {
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="center">个人中心</Menu.Item>
      <Menu.Item key="settings">个人设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <Button>hover 展示菜单</Button>
    </HeaderDropdown>
  );
};
```

## RightContent

RightContent 是以上几个组件的组合，同时新增了 plugins 的 `SelectLang` 插件。

```tsx | pure
<Space>
  <HeaderSearch
    placeholder="站内搜索"
    defaultValue="umi ui"
    options={[
      { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
      {
        label: <a href="next.ant.design">Ant Design</a>,
        value: 'Ant Design',
      },
      {
        label: <a href="https://protable.ant.design/">Pro Table</a>,
        value: 'Pro Table',
      },
      {
        label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
        value: 'Pro Layout',
      },
    ]}
  />
  <Tooltip title="使用文档">
    <span
      className={styles.action}
      onClick={() => {
        window.location.href = 'https://pro.ant.design/docs/getting-started';
      }}
    >
      <QuestionCircleOutlined />
    </span>
  </Tooltip>
  <Avatar />
  {REACT_APP_ENV && (
    <span>
      <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
    </span>
  )}
  <SelectLang className={styles.action} />
</Space>
```

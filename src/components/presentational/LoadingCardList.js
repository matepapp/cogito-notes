// @flow
import React from 'react';
import { List, Card } from 'antd';

const loadingData: Array<string> = Array(9).fill('');

const grid = { gutter: 20, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 };

export const LoadingCardList = () => (
  <List
    grid={grid}
    dataSource={loadingData}
    renderItem={item => (
      <List.Item>
        <Card loading title={item} />
      </List.Item>
    )}
  />
);

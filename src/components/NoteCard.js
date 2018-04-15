// @flow
import React from 'react';
import { Card } from 'antd';

type Props = {
  title: string,
  description: string,
  author: string,
};

export const NoteCard = (props: Props) => {
  const author = <div>{props.author}</div>;
  return (
    <Card title={props.title} extra={author} style={{ height: 170 }}>
      {props.description}
    </Card>
  );
};

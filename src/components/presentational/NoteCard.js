// @flow
import React from 'react';
import { Card } from 'antd';

type Props = {
  title: string,
  description: string,
  author: string,
};

const style = {
  height: 170,
};

export const NoteCard = (props: Props) => {
  const author = <div>{props.author}</div>;
  return (
    <Card title={props.title} extra={author} style={style}>
      {props.description}
    </Card>
  );
};

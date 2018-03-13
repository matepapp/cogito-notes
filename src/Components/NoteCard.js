// @flow
import React from 'react';
import { Card } from 'antd';

type Props = {
  isLoading: boolean,
  title: string,
  description: string,
};

const NoteCard = (props: Props) => {
  return (
    <Card loading={props.isLoading} title={props.title} style={{ width: '34%' }}>
      {props.description}
    </Card>
  );
};

export default NoteCard;

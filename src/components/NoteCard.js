// @flow
import React from 'react';
import { Card } from 'antd';

type Props = {
  isLoading: boolean,
  title: string,
  children: string,
};

export const NoteCard = (props: Props) => {
  return (
    // TODO: Make Card responsive
    <Card loading={props.isLoading} title={props.title} style={{ width: '200px' }}>
      {props.children}
    </Card>
  );
};

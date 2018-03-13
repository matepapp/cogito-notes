// @flow
import React from 'react';
import { Card } from 'antd';

type Props = {
  isLoading: boolean,
  title: string,
};

const NoteCard = (props: Props) => {
  return (
    <Card loading={props.isLoading} title={props.title} style={{ minWidth: '200px' }} />
  );
};

export default NoteCard;

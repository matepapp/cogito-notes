// @flow
import React from 'react';
import { Row } from 'antd';

type Props = {
  isReadOnly: boolean,
  title: string,
};

const NoteEditor = (props: Props) => (
  <Row>
    <div>{props.title}</div>
  </Row>
);

export default NoteEditor;

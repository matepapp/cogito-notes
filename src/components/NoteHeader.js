// @flow
import React from 'react';
import { Button, Col, Row } from 'antd';

type Props = {
  title: string,
  onSaveButton: () => string,
};

export const NoteHeader = (props: Props) => (
  <Row type="flex" justify="center" align="middle" style={{ margin: 10 }}>
    <Col xs={20} sm={18} md={16} lg={14} xl={12}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.title}</div>
    </Col>
    <Col span={2}>
      <Button type="primary" onClick={props.onSaveButton}>
        Save
      </Button>
    </Col>
  </Row>
);

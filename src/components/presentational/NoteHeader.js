// @flow
import React from 'react';
import { Button, Col, Row } from 'antd';

type Props = {
  title: string,
  onSaveButton: () => string,
};

const styles = {
  row: { margin: 10 },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export const NoteHeader = (props: Props) => (
  <Row type="flex" justify="center" align="middle" style={styles.row}>
    <Col xs={20} sm={18} md={16} lg={14} xl={12}>
      <div style={styles.title}>{props.title}</div>
    </Col>
    <Col span={2}>
      <Button type="primary" onClick={props.onSaveButton}>
        Save
      </Button>
    </Col>
  </Row>
);

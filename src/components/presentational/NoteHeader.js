// @flow
import React from 'react';
import { Button, Col, Row, Input } from 'antd';

type Props = {
  title: string,
  readOnly: boolean,
  editing: boolean,
  onTitleChange: (title: string) => void,
  onEditButton: () => void,
  onShareButton: () => void,
  onSaveButton: () => void,
};

const styles = {
  row: { margin: 10 },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export const NoteHeader = (props: Props) => {
  const {
    title,
    readOnly,
    editing,
    onTitleChange,
    onEditButton,
    onSaveButton,
    onShareButton,
  } = props;
  const readOnlyTitle = () => <div style={styles.title}>{title}</div>;
  const inputTitle = () => <Input defaultValue={title} onChange={onTitleChange} />;

  const renderButton = () => (
    <Button
      type="primary"
      disabled={readOnly}
      onClick={editing ? onSaveButton : onEditButton}>
      {editing ? 'Save' : 'Edit'}
    </Button>
  );

  const shareButton = () => (
    <Button type="secondary" onClick={onShareButton}>
      Share
    </Button>
  );

  return (
    <Row type="flex" justify="center" align="middle" style={styles.row}>
      <Col xs={20} sm={18} md={16} lg={14} xl={12}>
        {editing ? inputTitle() : readOnlyTitle()}
      </Col>
      <Col xs={4} sm={4} md={2} lg={2} xl={1}>
        {renderButton()}
      </Col>
      <Col xs={4} sm={4} md={2} lg={2} xl={1}>
        {shareButton()}
      </Col>
    </Row>
  );
};

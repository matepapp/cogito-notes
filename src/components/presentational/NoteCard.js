// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import { PATH } from '../../constants';

const { Meta } = Card;

type Props = {
  id: string,
  title: string,
  description: string,
  author: string,
  creationDate: string,
  onShareButton: () => void,
};

export const NoteCard = (props: Props) => {
  const { onShareButton, title, description, author, creationDate, id } = props;

  const creationDateLabel = <div>{creationDate}</div>;

  const editButton = (
    <Link to={`${PATH.NOTES}/${id}`}>
      <Button type="secondary" icon="select">
        View
      </Button>
    </Link>
  );

  const shareButton = (
    <Button type="secondary" icon="share-alt" onClick={onShareButton}>
      Share
    </Button>
  );

  return (
    <Card
      hoverable
      style={{
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        flex: '1',
        justifyContent: 'space-between',
      }}
      title={author}
      extra={creationDateLabel}
      actions={[editButton, shareButton]}>
      <Link to={`${PATH.NOTES}/${id}`}>
        <Meta title={title} description={description} />
      </Link>
    </Card>
  );
};

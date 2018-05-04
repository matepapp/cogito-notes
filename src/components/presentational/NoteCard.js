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

const style = {
  height: 200,
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
      bordered={false}
      title={author}
      extra={creationDateLabel}
      style={style}
      actions={[editButton, shareButton]}>
      <Meta title={title} description={description} />
    </Card>
  );
};

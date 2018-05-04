import React from 'react';
import { Button } from 'antd';

const style = {
  borderColor: '#00000000',
};

export const BorderlessButton = props => <Button {...props} style={style} />;

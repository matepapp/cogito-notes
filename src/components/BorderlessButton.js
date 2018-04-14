import React from 'react';
import { Button } from 'antd';

export const BorderlessButton = props => (
  <Button {...props} style={{ borderColor: '#00000000' }} />
);

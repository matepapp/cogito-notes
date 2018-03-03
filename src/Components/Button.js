// @flow
import React from 'react';
// import { Button } from 'rebass';

type Props = {
  value: string,
  onClick?: () => void,
};

const MyButton = (props: Props) => <button onClick={props.onClick}>{props.value}</button>;
export default MyButton;

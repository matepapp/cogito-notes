import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Button>
      <Link to="/home">Tap here to navigate Home!</Link>
    </Button>
  );
};

export default LoginPage;

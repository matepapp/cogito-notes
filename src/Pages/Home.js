import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Home = () => {
  return (
    <div>
      <div>Welcome Home!</div>
      <Button>
        <Link to="/">Go back to Login!</Link>
      </Button>
    </div>
  );
};

export default Home;

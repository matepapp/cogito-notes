import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const RegistrationSubmit = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 35 }}>
      <Button>
        <Link to="/home">Register / Login</Link>
      </Button>
    </div>
  );
};

export default RegistrationSubmit;

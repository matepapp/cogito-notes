import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import InputRow from '../Components/InputRow';
import { Card } from 'antd';

const LoginPage = () => {
  return (
    <div>
      <div>
        <Card style={{ width: 500, alignContent: 'center' }}>
          <InputRow label="Email" placeholder="johnappleseed@cogito.study" />
          <InputRow label="Password" placeholder="something" />

          <div style={{ marginTop: 50, alignContent: 'center' }}>
            <Button>
              <Link to="/home">Register / Login</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

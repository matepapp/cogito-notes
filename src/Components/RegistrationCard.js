import React from 'react';
import { Button } from 'antd';
import InputRow from '../Components/InputRow';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const RegistrationCard = () => {
  return (
    <Card>
      <InputRow label="Email" placeholder="johnappleseed@cogito.study" />
      <InputRow label="Password" placeholder="something" />

      <div style={{ marginTop: 35, alignContent: 'center' }}>
        <Button>
          <Link to="/home">Register / Login</Link>
        </Button>
      </div>
    </Card>
  );
};

export default RegistrationCard;

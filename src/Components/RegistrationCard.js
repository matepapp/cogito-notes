import React from 'react';
import RegistrationInputs from '../Components/RegistrationInputs';
import RegistrationSubmit from '../Components/RegistrationSubmit';

import { Card } from 'antd';

const RegistrationCard = () => {
  return (
    <Card>
      <RegistrationInputs />
      <RegistrationSubmit />
    </Card>
  );
};

export default RegistrationCard;

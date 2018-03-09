import React from 'react';
import InputRow from '../Components/InputRow';

const RegistrationInputs = () => {
  return (
    <div>
      <InputRow label="Email" placeholder="johnappleseed@cogito.study" />
      <InputRow label="Password" placeholder="something" />
    </div>
  );
};

export default RegistrationInputs;

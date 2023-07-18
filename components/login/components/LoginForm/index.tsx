import React, {useState} from 'react';

import {TextInput} from 'react-native';
import {DataLogin} from './types';

function FormLogin(): JSX.Element {
  const [dataLogin, setDataLogin] = useState<DataLogin>({
    email: '',
    password: '',
  });
  return (
    <>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
    </>
  );
}

export default FormLogin;

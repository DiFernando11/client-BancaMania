/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import FormLogin from './components/login/components/LoginForm';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <FormLogin />
    </SafeAreaView>
  );
}

export default App;

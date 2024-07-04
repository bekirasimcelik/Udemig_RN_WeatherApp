import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#00aaff',
        },
      }}>
      <Title>Weather App</Title>
    </Appbar.Header>
  );
};

export default Header;

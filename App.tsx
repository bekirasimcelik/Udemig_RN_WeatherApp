import {StatusBar} from 'react-native';
import React from 'react';
import Search from './src/screens/Search';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Search />
    </SafeAreaProvider>
  );
}

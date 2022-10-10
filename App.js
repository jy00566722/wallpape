import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// 获取路由
import Router from './src/router/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar hidden={true} translucent={true} />
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

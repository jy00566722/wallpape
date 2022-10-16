import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen';

// 获取路由
import Router from './src/router/index';

const App = () => {
  useEffect(() => {
    console.log('APP启动了');
    // SplashScreen.hide();
    return () => {};
  }, []);

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

import React, {useState} from 'react';
import {
  Button,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';

import Constants from 'expo-constants';

// const image = {uri: 'https://zh-hans.reactjs.org/logo-og.png'};
const App = () => {
  // const styleTypes = ['default', 'dark-content', 'light-content'];
  // const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  // const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} style={styles.image}> */}
      <Text style={styles.text}>美女壁纸</Text>
      {/* </ImageBackground>Ï */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#8A2Bf0',
    padding: 0,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    background: '#000000a0',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;

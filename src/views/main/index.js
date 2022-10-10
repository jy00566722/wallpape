import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '@react-native-material/core';
// import MeterialCommunityIcons from 'react-native-vector-icons';
import Icons from 'react-native-vector-icons/FontAwesome';

export default function Main() {
  return (
    <SafeAreaView>
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <Text>首页</Text>
        <Button title="Click Me" />
        <Icons name={'home'} size={100} color={'green'} />
      </View>
    </SafeAreaView>
  );
}

import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Detail({navigation}) {
  return (
    <SafeAreaView>
      <Text>详情</Text>
      <Button title="跳到搜索" onPress={() => navigation.navigate('Search')} />
    </SafeAreaView>
  );
}

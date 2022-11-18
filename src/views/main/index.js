import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
// import {Box} from '@react-native-material/core';
import Constants from 'expo-constants';
import Carousel from 'react-native-reanimated-carousel';

const App = () => {
  const [todayItem, setTodayItem] = useState([
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664035542938099MudVdm.JPG',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664035548445653Wgxbmk.JPG',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664035560549879OhFTiu.JPG',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664035624756466gaazMM.JPG',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664097045872613hFHWMA.jpeg',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664097407352108nyGEPh.jpeg',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664097649573533ixDyuL.jpeg',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664097371591612ZqXxOB.jpeg',
    'https://f004.backblazeb2.com/file/oeolii/20220925/1664096966066880ZNjqiE.jpeg',
  ]);
  const width = Dimensions.get('window').width;
  const _render = imgSrc => {
    console.log(imgSrc);
    return (
      <View>
        <Image
          style={styles.todayItem}
          source={{
            uri: imgSrc,
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>今日推荐</Text>
      <View>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={todayItem}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item, index}) => _render(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
    padding: 0,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 8,
  },
  containerWarp: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemImage: {
    width: '30%',
    height: 220,
    flexGrow: 1,
    backgroundColor: 'green',
    padding: 5,
    margin: 1,
  },
  todayItem: {
    width: 300,
    height: 600,
  },
});

export default App;

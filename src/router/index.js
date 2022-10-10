import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icons from 'react-native-vector-icons/Ionicons';

// 页面列表
import Main from '../views/main/index';
// console.log('Main:', Main);
import Serach from '../views/search/index';
import Me from '../views/me/index';
// 新增三个页面
import Detail from '../views/Detail/index';
import Setting from '../views/setting/index';
import Login from '../views/login/index';

// 创建堆栈导航，可以存放打开过的页面
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 导航全局配置，包裹下的所有导航均会使用该样式。
// https://reactnavigation.org/docs/bottom-tab-navigator

const screenOption = ({route}) => ({
  headerShown: false,
  tabBarInactiveTintColor: 'gray', // 非选中文字和图标的颜色
  tabBarActiveTintColor: 'tomato', // 选中文字和图标的颜色
  tabBarHideOnKeyboard: true, // 打开键盘时，选项卡是否隐藏

  // tabBar的样式，根据当前触发的tab
  tabBarStyle: {
    borderTopColor: 'rgba(0, 0, 0, .2)', // 导航栏顶部边框颜色
  },
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    switch (route.name) {
      case 'Main':
        iconName = 'home-outline';
        break;
      case 'Search':
        iconName = 'search-outline';
        break;
      case 'Me':
        iconName = 'person-outline';
        break;
      default:
        iconName = 'home-outline';
    }
    if (focused) {
      iconName = iconName.slice(0, -8);
    }
    // You can return any component that you like here!
    return <Icons name={iconName} size={size} color={color} />;
  },
});

// 首页
const Tabs = () => (
  <Tab.Navigator screenOptions={screenOption}>
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="Search" component={Serach} />
    <Tab.Screen name="Me" component={Me} />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Tabs" screenOptions={screenOption}>
      {/* 首页tab页面 */}
      <Stack.Screen name="Tabs" component={Tabs} />

      {/* 页面 */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '设置',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

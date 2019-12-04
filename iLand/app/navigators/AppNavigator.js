import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import HouseDetailScreen from '../components/HouseDetailScreen';
import {Colors} from '../styles/DefaultStyles';
import {Icon} from 'react-native-elements';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    HouseDetail: {
      screen: HouseDetailScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'heartbeat';
        } else if (routeName === 'Settings') {
          iconName = 'heart';
        }
        return (
          <Icon
            name={iconName}
            type="font-awesome"
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.disable,
      showIcon: true,
      showLabel: false,
    },
  },
);

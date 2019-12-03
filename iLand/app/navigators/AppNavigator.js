import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },

    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
    },
  },
);

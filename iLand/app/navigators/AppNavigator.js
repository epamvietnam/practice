import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import {Colors} from '../styles/DefaultStyles';

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
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.disable,
    },
  },
);

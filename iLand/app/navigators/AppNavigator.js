import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import HouseDetailScreen from '../components/HouseDetailScreen';
import {Colors} from '../styles/DefaultStyles';

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
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.disable,
    },
  },
);

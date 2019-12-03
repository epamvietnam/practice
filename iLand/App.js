import {createAppContainer} from 'react-navigation';
import HomeScreen from './app/components/HomeScreen';
import SettingsScreen from './app/components/SettingsScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
});

export default createAppContainer(TabNavigator);

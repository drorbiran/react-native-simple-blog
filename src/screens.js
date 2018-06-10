import {Navigation} from 'react-native-navigation';

import App from './App';
import Screen1 from './Screen1';

export function registerScreens() {

  Navigation.registerComponent('blog.App', () => App);
  Navigation.registerComponent('blog.Screen1', () => Screen1);

}

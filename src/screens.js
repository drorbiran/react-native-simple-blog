import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {store} from './store';

export function registerScreens() {

  Navigation.registerComponentWithRedux('blog.PostsList', () => require('./posts/screens/PostsList').default, Provider, store);
  Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);

}

import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from './store';

import PostsList from './posts/screens/PostsList';


export function registerScreens() {

  Navigation.registerComponentWithRedux('blog.PostsList', () => PostsList, Provider, store);
  Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);

}

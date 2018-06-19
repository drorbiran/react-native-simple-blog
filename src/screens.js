import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import React from 'react';

import {store} from './store';

import PostsList from './posts/screens/PostsList';


export function registerScreens() {

  Navigation.registerComponent('blog.PostsList', withRedux(PostsList, store));
  Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);

}

function withRedux(Comp, store) {
  return () => {
    return class WithReduxComponent extends React.Component {
      render() {
        return <Provider store={store}><Comp {...this.props}/></Provider>;
      }
    };
  };
}

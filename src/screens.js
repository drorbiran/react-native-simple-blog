import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import React from 'react';

import {store} from './store';

import PostsList from './posts/screens/PostsList';


export function registerScreens() {

  Navigation.registerComponent('blog.PostsList', sceneCreator(PostsList, store));
  Navigation.registerComponent('blog.AddPost', () => require('./posts/screens/AddPost').default);
  Navigation.registerComponent('blog.ViewPost', () => require('./posts/screens/ViewPost').default);

}

function sceneCreator(sceneComp, store) {
  return () => {
    return class Wrapper extends React.Component {
      render() {
        return (
          <Provider store={store}>{React.createElement(sceneComp)}</Provider>
        );
      }
    };
  };
}

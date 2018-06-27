import * as remx from 'remx';
import _ from 'lodash';

const initialState = {
  posts: {}
  //This is how the state will look like
  // posts: {
  //   1: {
  //     'id': 1,
  //     'title': 'Post1',
  //     text: 'Post 1 text',
  //     img: 'http://some.image.url'
  //   },
  //   2: {
  //     id: 2,
  //     title: 'Post2',
  //     text: 'Post  text',
  //     img: 'http://some.image.url'
  //   }
  // }
};
const state = remx.state(initialState);

const getters = remx.getters({

  getPosts() {
    return state.posts;
  },

  getPostsArray() {
    return _.values(state.posts);
  }

});

const setters = remx.setters({
  setPosts(posts) {
    state.posts = posts;
  }
});

export const postsStore = {
  ...getters,
  ...setters
};


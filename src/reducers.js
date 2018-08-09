import {combineReducers} from 'redux';

import postsReducer from './posts/posts.reducer';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;

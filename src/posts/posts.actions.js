import {postsStore} from './posts.store';

const posts = [
  {
    id: 1,
    title: 'Post1',
    text: 'Post 1 text',
    img: 'http://some.image.url'
  },
  {
    id: 1,
    title: 'Post1',
    text: 'Post 1 text',
    img: 'http://some.image.url'
  },
];

export function fetchPosts() {
  postsStore.setPosts(posts);
}

import {postsStore} from './posts.store';

const mockPosts = [
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

export async function fetchPosts() {
  const mockPosts = await mockFetch();
  postsStore.setPosts(mockPosts);
}

async function mockFetch() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockPosts);
    }, 1000);
  });
}





const mockPosts = [
  {
    id: 1,
    title: 'Post1',
    text: 'Post1 text',
    img: 'https://images.unsplash.com/photo-1'
  },
  {
    id: 2,
    title: 'Post2',
    text: 'Post2 text',
    img: 'https://images.unsplash.com/photo-2'
  },
  {
    id: 3,
    title: 'Post3',
    text: 'Post3 text',
    img: 'https://images.unsplash.com/photo-3'
  },
];

export function action$fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: mockPosts
  };
}


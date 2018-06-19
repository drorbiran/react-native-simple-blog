
const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: 'Post1',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    img: 'https://images.unsplash.com/photo-1520014380140-c48c62c3ac38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24118c3959d020a8aac901ad51bf2618&auto=format&fit=crop&w=120&q=80'
  },
  {
    userId: 2,
    id: 2,
    title: 'Post2',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    img: 'https://images.unsplash.com/photo-1520014380140-c48c62c3ac38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24118c3959d020a8aac901ad51bf2618&auto=format&fit=crop&w=120&q=80'
  },
  {
    userId: 3,
    id: 3,
    title: 'Post3',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    img: 'https://images.unsplash.com/photo-1520014380140-c48c62c3ac38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24118c3959d020a8aac901ad51bf2618&auto=format&fit=crop&w=120&q=80'
  },
];

export function action$fetchPosts() {
  return {
    type: 'FETCH_POSTS',
    payload: mockPosts
  };
}



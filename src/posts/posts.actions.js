import {postsStore} from './posts.store';
import axios from 'axios';

export async function fetchPosts() {

  const response = await axios.get('http://localhost:3000/posts');
  const posts = response.data;
  postsStore.setPosts(posts);
}





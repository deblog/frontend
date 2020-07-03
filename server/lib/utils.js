export { api } from '~/lib/api';
export { getUsers } from '~/operations/user-operations';
export { getPosts, getPost } from '~/operations/post-operations';

export const router = {
  address: {
    index: '/',
    users: '/users',
  },
};

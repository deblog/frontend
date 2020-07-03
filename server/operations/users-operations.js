import { users } from '~/db/users-db';
export const getUsers = () => users;
export const getUser = id => users.find(item => item.id === id);

export const mapper = {
  pageUrl: {
    login: '/signin',
  },
  api: {
    index: {
      get: '/',
    },
    login: {
      post: '/users/login',
    },
    signup: {
      post: '/users/signup',
    },
    user: {
      get: '/users',
    },
    post: {
      get: '/posts',
    },
    error: {
      get: '/error',
    },
    test: {
      get: '/test',
    },
  },
  router: {
    address: {
      index: '/',
      users: '/users',
      auth: '/auth',
      test: '/test',
    },
  },
};

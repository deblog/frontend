import _ from 'lodash';
export const resultState = {
  database: {
    success: {
      getData: {
        result: 101,
        msg: 'success -- get data',
      },
      notFound: {
        result: 102,
        msg: 'success -- not Found data',
      },
      notEnoughParam: {
        result: 103,
        msg: 'success -- not Enough Param',
      },
      noAffected: {
        msg: 'success -- not affected',
        result: 104,
      },
    },
    failure: {
      msg: 'failure -- ',
      result: 0,
    },
  },
  auth: {
    valid: {
      msg: 'auth -- valid',
      result: 801,
    },
    expired: {
      msg: 'auth -- expired',
      resunt: 802,
    },
    empty: {
      msg: 'auth -- empty',
      resunt: 803,
    },
    invalid: {
      msg: 'auth -- invalid',
      resunt: 804,
    },
    refresh: {
      msg: 'auth -- refresh',
      resunt: 805,
    },
  },

  expire: {
    token: {
      msg: 'token expire',
      result: 701,
    },
  },
  error: {
    server: {
      msg: 'server error',
      result: 500,
    },
  },
};

const mapper = {
  pageUrl: {
    login: '/signin',
  },
  api: {
    index: {
      index: '/',
      getHome: '/',
      getLocalData: '/local/data',
    },
    auth: {
      index: '/auth',
      postSignUp: '/auth/signup',
      postLogin: '/auth/login',
    },
    user: {
      get: '/users',
    },
    error: {
      index: '/error',
      get: '/error',
    },
    token: {
      index: '/auth',
      getTokenCreate: '/token',
      getTokenAuth: '/token/auth',
    },
    common: {
      getLanguages: '/languages',
    },
  },
  router: {
    index: '/',
    users: '/users',
    auth: '/auth',
    test: '/test',
  },
  resultState,
  configure() {
    const self = this;
    _.forEach(self.router, (item, key, val) => {
      val[key] = '/api' + item;
    });
  },
};
// mapper  configure
mapper.configure();
export { mapper };

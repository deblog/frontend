import * as utils from './utils';

export const local = {
  boot() {
    this.data.token = utils.token.get();
  },
  data: {
    token: utils.token.get(),
  },
  token: utils.token,
};

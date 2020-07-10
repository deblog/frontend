export const ENV_MODE = process.env.NODE_ENV;
export const ENV_MODE_DEV = process.env.NODE_ENV === 'development';
export const ENV_MODE_PROD = process.env.NODE_ENV === 'production';

export const API_ADDRESS = ENV_MODE_DEV
  ? `http://127.0.0.1:4000/graphql`
  : `http://127.0.0.1:4000/graphql`;

export const API_BIN_ADDRESS = ENV_MODE_DEV
  ? `http://127.0.0.1:4000/graphql`
  : `http://127.0.0.1:4000/graphql`;

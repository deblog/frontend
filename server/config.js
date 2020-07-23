import dotenv from 'dotenv';
const envFile = `${__dirname}/.env`;
const result = dotenv.config({ path: envFile });

if (result.error) throw result.error;

export default result.parsed;

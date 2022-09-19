import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { Pool } from 'pg'

dotenv.config();

const client = new Pool({
  user: 'viewer',
  host: process.env.HOST,
  database: 'postgres',
  password: process.env.PASSWORD,
  port: 6543,
  query_timeout: 9900
});

export default client
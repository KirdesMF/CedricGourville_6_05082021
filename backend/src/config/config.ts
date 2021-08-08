import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'dev';

const dev = {
   port: process.env.PORT || 3000,
   db: process.env.DB_URL || 'mongodb://localhost/test-db',
   host: process.env.DEV_DB_HOST || 'localhost',
};

const production = {
   port: process.env.PORT || 3000,
   db: process.env.DB_URL_PROD || 'mongodb://localhost/test-db',
   host: process.env.PROD_DB_HOST || 'localhost',
};

const test = {
   port: process.env.PORT || 3000,
   db: process.env.DB_URL_TEST || 'mongodb://localhost/test-db',
   host: process.env.TEST_DB_HOST || 'localhost',
};

const config = {
   dev,
   production,
   test,
};

export default config[env as keyof typeof config];

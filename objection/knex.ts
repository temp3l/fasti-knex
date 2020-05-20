import Knex from 'knex';

const knex = Knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'box',
    password: 'xxx',
    database: 'classicmodels',
  },
});

export default knex;

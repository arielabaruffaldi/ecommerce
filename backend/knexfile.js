import Knex from 'knex';

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/ecommerce.db3'
    }
  },

  useNullAsDefault: true,

  pool: {
    min: 2,
    max: 10
  },
}

const dbSqlite = Knex(config.development)

const db = {

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

export { db, dbSqlite }
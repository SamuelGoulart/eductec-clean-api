import path from 'path'

const knexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'eductec',
      host: 'mysql',
      port: 3306,
      user: 'root',
      password: '123456'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/src/infra/db/mysql/database/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/src/infra/db/mysql/database/seeds')
    }
  }
}

export default knexConfig

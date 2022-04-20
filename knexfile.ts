import path from 'path'

const knexConfig = {
  development: {
    client: 'mssql',
    connection: {
      database: 'eductec',
      host: 'localhost',
      port: 1433,
      user: 'samuel.almeida',
      password: ''
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

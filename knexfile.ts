import path from 'path'

export default {
  development: {
    client: 'mysql2',
    connection: {
      database: 'eductec',
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'abc45101922072'
    },
    migrations: {
      directory: path.join(__dirname, '/src/infra/db/mssqldb/database/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/src/infra/db/mssqldb/database/seeds')
    }
  }
}

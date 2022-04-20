import connection from '../infra/db/mysql/helpers/connect'
import app from './config/app'

void (async () => {
  try {
    await connection.raw('select 1')
    app.listen(5050, () => console.log('Server running at http://localhost:5050'))
  } catch (error) {
    console.error(error)
  }
})()

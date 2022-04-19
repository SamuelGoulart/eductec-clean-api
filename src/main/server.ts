import connection from '../infra/db/mysql/helpers/connect'
import app from './config/app'

connection()
app.listen(5050, () => console.log('Server running at http://localhost:5050'))

// connection().then(async () => {
//   const app = (await import('./config/app')).default
//   app.listen(5050, () => console.log('Server running at http://localhost:5050'))
// }).catch(console.error)

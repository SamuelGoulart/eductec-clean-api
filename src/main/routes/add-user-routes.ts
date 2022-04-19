import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddUserController } from '../factories/add-user/add-user'

export default (router: Router): void => {
  router.post('/add-user', adaptRoute(makeAddUserController()))
}

import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { AccountMysqlRepository } from '../../../infra/db/mysql/models/account-repository/account'
import { DbAddAccount } from '../../../data/usecases/add-user-account/db-add-user-account'
import { AddUserController } from '../../../presentation/controllers/add-user/add-user'
import { Controller } from '../../../presentation/protocols'
import { makeAddUserValidation } from './add-user-validation'
import { LogMysqlRepository } from '../../../infra/db/mysql/models/log-repository/log'
import { LogControllerDecorator } from '../../decorators/log'

export const makeAddUserController = (): Controller => {
  // Main
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMysqlRepository = new AccountMysqlRepository()

  // Infra
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMysqlRepository)
  const logMysqlRepository = new LogMysqlRepository()

  // Presentation
  const addUserController = new AddUserController(dbAddAccount, makeAddUserValidation())

  return new LogControllerDecorator(addUserController, logMysqlRepository)
}

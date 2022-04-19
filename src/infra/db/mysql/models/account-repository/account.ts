import { AddAccountRepository } from '../../../../../data/protocols/db/account/add-account-repository'
import { AddUserAccountModel } from '../../../../../domain/usecases'
import { AccountModel } from '../../../../../domain/models/account'
import knex from '../../helpers/connect'

export class AccountMysqlRepository implements AddAccountRepository {
  async add (accountData: AddUserAccountModel): Promise<AccountModel> {
    const [account] = await knex('accounts')
      .insert({
        name: accountData.name,
        email: accountData.email,
        password: accountData.password,
        role: accountData.role
      }).returning('*')
    return account
  }
}

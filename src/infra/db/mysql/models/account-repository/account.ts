import { AddAccountRepository } from '../../../../../data/protocols/db/add-account-repository'
import { AddUserAccountModel } from '../../../../../domain/usecases'
import { AccountModel } from '../../../../../domain/models/account'
import knex from '../../helpers/connect'

export class AccountMysqlRepository implements AddAccountRepository {
  async add (accountData: AddUserAccountModel): Promise<AccountModel> {
    const accountid = await knex('accounts')
      .insert({
        name: accountData.name,
        email: accountData.email,
        password: accountData.password,
        role_id: accountData.role
      })

    const account = await knex('accounts').where({ accountid })
    return account
  }
}

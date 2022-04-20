import { AddAccountRepository } from '../../../../../data/protocols/db/db-add-account-repository'
import { AddUserAccountModel } from '../../../../../domain/usecases'
import { AccountModel } from '../../../../../domain/models/account'
import knex from '../../helpers/connect'

export class AccountMysqlRepository implements AddAccountRepository {
  async add (accountData: AddUserAccountModel): Promise<AccountModel> {
    const [accountId] = await knex('accounts')
      .insert({
        name: accountData.name,
        email: accountData.email,
        password: accountData.password,
        role_id: accountData.roleId
      })

    const [account] = await knex('accounts')
      .select('id','name','email','password', 'role_id as roleId')
      .where({ id: accountId })

    return account
  }
}

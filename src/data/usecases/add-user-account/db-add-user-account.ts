import { AddUserAccount, AddUserAccountModel, AccountModel, Hasher, AddAccountRepository } from './db-add-user-account-protocols'

export class DbAddAccount implements AddUserAccount {
  private readonly hasher: Hasher
  private readonly addAccountRepository: AddAccountRepository

  constructor (hasher: Hasher, addAccountRepository: AddAccountRepository) {
    this.hasher = hasher
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddUserAccountModel): Promise<AccountModel> {
    const password = Math.random().toString(36).slice(-10)
    const hashedPassword = await this.hasher.hash(password)
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}

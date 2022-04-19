import { AccountModel } from '../models/account'

export interface AddUserAccountModel {
  name: string
  email: string
}

export interface AddUserAccount {
  add: (account: AddUserAccountModel) => Promise<AccountModel>
}

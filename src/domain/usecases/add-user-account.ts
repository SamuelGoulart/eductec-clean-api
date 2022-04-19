import { AccountModel } from '../models/account'

export interface AddUserAccountModel {
  name: string
  email: string
  password: string
  role: number
}

export interface AddUserAccount {
  add: (account: AddUserAccountModel) => Promise<AccountModel>
}

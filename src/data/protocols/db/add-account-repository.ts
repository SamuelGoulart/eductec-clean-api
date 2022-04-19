import { AddUserAccountModel } from '../../../domain/usecases/add-user-account'
import { AccountModel } from '../../../domain/models/account'

export interface AddAccountRepository {
    add (accountData: AddUserAccountModel): Promise<AccountModel> 
}
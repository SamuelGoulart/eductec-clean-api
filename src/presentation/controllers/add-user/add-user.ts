import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, Validation, AddUserAccount } from './add-user-protocols'

export class addUser implements Controller {
  private readonly validator: Validation
  private readonly addUserAccount: AddUserAccount

  constructor (addUserAccount: AddUserAccount, validation: Validation) {
    this.addUserAccount = addUserAccount
    this.validator = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validator.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email } = httpRequest.body

      const account = await this.addUserAccount.add({
        name,
        email
      })

      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}

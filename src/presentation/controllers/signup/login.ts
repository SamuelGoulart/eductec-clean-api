import { Controller } from '../../protocols'
import { badRequest, serverError } from '../../helpers/http/http-helper'
import { HttpRequest, HttpResponse, Validation } from './login-protocols'

export class LoginController implements Controller {
  private readonly validator: Validation
  private readonly authentication: Authentication

  constructor (validation: Validation, authentication: Authentication) {
    this.validator = validation
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validator.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password, roleId } = httpRequest.body

      const accessToken = await this.authentication.add({
        name,
        email,
        password,
        roleId
      })
  
    } catch (error) {
      return serverError(error)
    }
  }
}

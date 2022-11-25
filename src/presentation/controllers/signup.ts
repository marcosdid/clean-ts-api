import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from '../erros/invalid-param-error'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmantion']

    for (const field in requiredFields) {
      if (!httpRequest.body[requiredFields[field]]) {
        return badRequest(new MissingParamError(requiredFields[field]))
      }
    }

    if (!this.emailValidator.isValid(httpRequest.body.email)) {
      return badRequest(new InvalidParamError('email'))
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}

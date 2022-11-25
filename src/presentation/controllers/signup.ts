import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmantion']

    for (const field in requiredFields) {
      if (!httpRequest.body[requiredFields[field]]) {
        return badRequest(new MissingParamError(requiredFields[field]))
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}

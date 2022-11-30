import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

describe('bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    const sut = new BcryptAdapter(salt)
    const value = 'any_value'
    await sut.encrypt(value)
    expect(hashSpy).toHaveBeenCalledWith(value, salt)
  })
})

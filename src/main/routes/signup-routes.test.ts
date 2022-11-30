import request from 'supertest'
import app from '../config/app'

describe('SignUo Routes', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Marcos',
        email: 'marcosdid.developer@gmail.com',
        password: '123teste',
        passwordConfirmation: '123teste'
      })
      .expect(200)
  })
})

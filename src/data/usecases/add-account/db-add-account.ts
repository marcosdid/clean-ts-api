import { Encrypter, AddAccount, AccountModel, AddAccountModel } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const accountModel: AccountModel = {
      id: 'valid',
      ...account
    }

    await this.encrypter.encrypt(account.password)

    return await new Promise(resolve => resolve(accountModel))
  }
}

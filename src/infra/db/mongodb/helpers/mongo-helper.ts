import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: 'unknown' as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },
  async disconect () {
    await this.client.close()
  },

  async getColletion(name: string): Promise<Collection> {
    return this.client.db().collection(name)
  }
}

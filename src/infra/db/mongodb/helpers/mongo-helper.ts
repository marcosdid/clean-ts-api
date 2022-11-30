import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: 'unknown' as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    await MongoClient.connect(uri)
  },
  async disconect () {
    await this.client.close()
  }
}

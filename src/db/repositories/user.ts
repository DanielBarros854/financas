import { type User } from '@prisma/client'
import { prismaClient } from '../prisma'

export class UserRepository {
  async getById (id: number): Promise<User | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        id
      }
    })

    return user
  }
}

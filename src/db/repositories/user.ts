import { type User } from '@prisma/client'
import { type UserWhereInput } from '../../../prisma/generated/type-graphql'

import { prismaClient } from '../prisma'

export class UserRepository {
  async getById (id: number): Promise<User | null> {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id
        }
      })

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  async getAll (where?: UserWhereInput): Promise<User[]> {
    try {
      const users = await prismaClient.user.findMany({
        where
      })

      return users
    } catch (error) {
      throw new Error(error)
    }
  }
}

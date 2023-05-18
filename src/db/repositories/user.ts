import { type User } from '@prisma/client'
import { type UserWhereUniqueInput, type UserWhereInput } from '../../../prisma/generated/type-graphql'

import { prismaClient } from '../prisma'

export class UserRepository {
  async getUnique (where: UserWhereUniqueInput): Promise<User | null> {
    try {
      const user = await prismaClient.user.findUnique({
        where
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

  async create (input: any): Promise<User> {
    try {
      const newUser = await prismaClient.user.create({
        data: input
      })

      return newUser
    } catch (error) {
      throw new Error(error)
    }
  }
}

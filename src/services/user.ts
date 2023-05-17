import { type User } from '@prisma/client'
import { Service } from 'typedi'
import { type UserWhereInput } from '../../prisma/generated/type-graphql'

import { UserRepository } from '../db/repositories'

@Service()
export class UserService {
  constructor (private readonly userRepository: UserRepository) { }

  async getById (id: number): Promise<User> {
    const user = await this.userRepository.getById(id)

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async getAll (where?: UserWhereInput): Promise<User[]> {
    const users = await this.userRepository.getAll(where)

    return users
  }
}

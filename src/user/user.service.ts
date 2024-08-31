import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UserType } from './user.model';

@Injectable()
export class UserService {
  constructor(private ormService: PrismaService) {}

  async createUser(fields: CreateUserInput): Promise<UserType> {
    return this.ormService.user.create({
      data: fields,
    });
  }

  async getUsers(): Promise<UserType[]> {
    return this.ormService.user.findMany();
  }
}

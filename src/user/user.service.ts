import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserInput, UserType, UserUpdateInput } from './user.model';
import { customErrorHandler } from 'src/shared/customErrors';
import { Removed } from 'src/shared/types/removed';
import { CryptoService } from 'src/crypto/crypto.service';

@Injectable()
export class UserService {
  constructor(
    private readonly ormService: PrismaService,
    private readonly cryptoService: CryptoService,
  ) {}

  async userAdd(fields: UserInput): Promise<UserType> {
    try {
      const { password, ...new_user_data } = fields;

      const encrypted_password = await this.cryptoService.hash(password);

      const new_user = await this.ormService.user.create({
        data: {
          ...new_user_data,
          password: encrypted_password,
        },
      });

      return new_user;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async users(id?: number): Promise<UserType[]> {
    try {
      const users_data = await this.ormService.user.findMany({
        where: {
          id,
        },
      });

      return users_data;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async userUpdate(id: number, fields: UserUpdateInput): Promise<UserType> {
    try {
      const user = await this.ormService.user.update({
        where: {
          id,
        },
        data: fields,
      });

      return user;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async userRemove(id: number): Promise<Removed> {
    try {
      const user = await this.ormService.user.delete({
        where: {
          id,
        },
      });

      if (user) {
        return { removed: true };
      }

      return { removed: false };
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }
}

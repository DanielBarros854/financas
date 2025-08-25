import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EarningInput, EarningType, EarningUpdateInput } from './earning.model';
import { customErrorHandler } from 'src/shared/customErrors';
import { Removed } from 'src/shared/types/removed';
import { LoggedUserType } from 'src/auth/auth.model';

@Injectable()
export class EarningService {
  constructor(private readonly ormService: PrismaService) {}

  async earningAdd(
    fields: EarningInput,
    logged_user: LoggedUserType,
  ): Promise<EarningType> {
    try {
      const new_earning = await this.ormService.earning.create({
        data: {
          ...fields,
          user_id: logged_user.id,
        },
      });

      return new_earning;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async earnings(user_id: number): Promise<EarningType[]> {
    try {
      const earnings_data = await this.ormService.earning.findMany({
        where: {
          user_id,
        },
      });

      return earnings_data;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async earningUpdate(
    id: number,
    fields: EarningUpdateInput,
  ): Promise<EarningType> {
    try {
      const earning = await this.ormService.earning.update({
        where: {
          id,
        },
        data: fields,
      });

      return earning;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async earningRemove(id: number): Promise<Removed> {
    try {
      const earning = await this.ormService.earning.delete({
        where: {
          id,
        },
      });

      if (earning) {
        return { removed: true };
      }

      return { removed: false };
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }
}

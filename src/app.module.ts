import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaService } from './prisma/prisma.service';
import { ExpenseModule } from './expense/expense.module';
import { InvestmentModule } from './investiment/investment.module';
import { UserModule } from './user/user.module';
import { CryptoModule } from './crypto/crypto.module';
import { AuthModule } from './auth/auth.module';
import { EarningModule } from './earning/earning.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: 'schema.gql',
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ExpenseModule,
    InvestmentModule,
    UserModule,
    CryptoModule,
    AuthModule,
    EarningModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}

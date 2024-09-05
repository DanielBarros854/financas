import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime/library';
import { prismaHandlerError } from './prismaErrors';

export const customErrorHandler = (error: any): Error => {
  if (error instanceof PrismaClientKnownRequestError)
    return prismaHandlerError(error);

  if (error instanceof PrismaClientInitializationError)
    return new Error('Erro interno na base de dados.');

  switch (error?.message) {
    case 'invalidCredentials':
      return new Error('Credenciais inválidas.');
    default:
      return error;
  }
};

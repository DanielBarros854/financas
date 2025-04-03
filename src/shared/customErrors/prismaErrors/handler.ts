/* eslint-disable no-case-declarations */
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaErrorCode } from './errorsEnum';
import { translate } from '../translate';

interface UniqueError {
  modelName: string;
  target: string;
}

interface ForeignKeyError {
  field_name: string;
}

interface RecordNotFoundError {
  modelName: string;
  meta?: {
    cause: string;
    modelName: string;
  };
}

export const prismaHandlerError = (error: PrismaClientKnownRequestError) => {
  if (!error.code) return new Error('Erro interno na base de dados.');

  switch (error.code) {
    case PrismaErrorCode.database_off:
      return new Error('Erro interno na base de dados.');

    case PrismaErrorCode.unique_constraint:
      const unique_error = error.meta as unknown as UniqueError;

      const unique_key = unique_error.modelName.toLowerCase();

      const formated_unique_constraint =
        translate(unique_key).captalize_first_letter;

      return new Error(`${formated_unique_constraint} já existe.`);

    case PrismaErrorCode.foreign_key_constraint:
      const { field_name } = error.meta as unknown as ForeignKeyError;
      const [foreign_key] = field_name.split('_id');
      const formated_foreign_key =
        translate(foreign_key).captalize_first_letter;
      return new Error(`${formated_foreign_key} não existe.`);

    case PrismaErrorCode.record_not_found:
      const { modelName, meta } = error as unknown as RecordNotFoundError;

      const record_key = meta
        ? meta.modelName.toLowerCase()
        : modelName.split(' ')[1].toLowerCase();

      const formated_record_key_key =
        translate(record_key).captalize_first_letter;

      return new Error(`${formated_record_key_key} não existe.`);

    default:
      return new Error(error.message);
  }
};

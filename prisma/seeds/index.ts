import { PrismaClient } from '@prisma/client';
import { userSeed } from './user';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.createMany({ data: userSeed });
};

main();

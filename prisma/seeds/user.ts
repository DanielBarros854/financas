import { User } from '@prisma/client';

export const userSeed: User[] = [
  {
    id: 1,
    name: 'Daniel',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    name: 'Gabriel',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 3,
    name: 'Julia',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

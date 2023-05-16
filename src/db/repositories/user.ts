import { User } from "@prisma/client";
import { prisma_client } from "../prisma";

export class UserRepository {
  public getById = async (id: number): Promise<User | null> => {
    const user = await prisma_client.user.findUnique({
      where: {
        id
      }
    })

    return user
  }
}

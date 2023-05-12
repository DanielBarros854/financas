import { User } from "@prisma/client";

export class UserService {
  public user = async (id: number): Promise<User> => {
    return {
      id,
      cpf: '',
      email: '',
      name: '',
      password: '',
      created_at: new Date(),
      updated_at: new Date(),
    }
  }
}

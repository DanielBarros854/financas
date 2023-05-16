import { User } from "@prisma/client";
import { UserRepository } from "../db/repositories";

export class UserService {
  constructor(private userRepository: UserRepository = new UserRepository) { }

  public user = async (id: number): Promise<User> => {
    const _user = await this.userRepository.getById(id);

    if (!_user) {
      throw new Error("User not found");
    }

    return _user
  }
}

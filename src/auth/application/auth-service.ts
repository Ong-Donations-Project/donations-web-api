import { User } from "../domain/entities/user.entity";
import { IAuthRepository } from "../domain/interfaces/repository/IAuthRepository";
import { createUserPayload } from "../domain/payloads";

export class AuthService {
  private readonly AuthRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.AuthRepository = authRepository;
  }

  public async createUser(data: createUserPayload): Promise<User> {
    try {
      const newUser: User = new User(data);
      const user = await this.AuthRepository.create(newUser);

      return user;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
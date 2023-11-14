import { User } from "../../entities/user.entity";

export interface IAuthRepository {
  // eslint-disable-next-line no-unused-vars
  create(user: User): Promise<User>;
}
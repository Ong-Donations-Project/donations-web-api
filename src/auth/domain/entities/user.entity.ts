import { IUser } from "../interfaces/entity";
import { createUserPayload } from "../payloads";

export class User implements IUser {
  id = 0;
  name: string | null;
  email: string;

  constructor(userData: createUserPayload) {
    this.name = userData.name;
    this.email = userData.email;
  }
}
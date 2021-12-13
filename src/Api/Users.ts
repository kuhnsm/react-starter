import UserType from "../Models/User";
import { v4 as uuidv4 } from "uuid";

const users: Array<UserType> = [];

export function getUsers(): Promise<UserType[]> {
  return new Promise((resolve) => setTimeout(() => resolve(users), 1000));
}

export function addUser(user: UserType) {
  return new Promise((resolve) =>
    setTimeout(() => {
      user.id = uuidv4();
      users.push(user);
      resolve(true);
    })
  );
}

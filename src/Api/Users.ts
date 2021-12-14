import UserType from "../Models/User";
import { v4 as uuidv4 } from "uuid";

let users: Array<UserType> = [];

export function getUsers(): Promise<UserType[]> {
  return new Promise((resolve) => setTimeout(() => resolve(users), 1000));
}

export function addUser(user: UserType): Promise<boolean> {
  return new Promise((resolve) =>
    setTimeout(() => {
      user.id = uuidv4();
      users.push(user);
      resolve(true);
    })
  );
}

export function editUser(user: UserType): Promise<boolean> {
  return new Promise((resolve) => {
    users = users.map((currentUser) => {
      if (currentUser.id === user.id) {
        return user;
      } else {
        return currentUser;
      }
    });
    resolve(true);
  });
}

export function deleteUser(user: UserType): Promise<boolean> {
  return new Promise((resolve) => {
    users = users.filter((currentUser) => {
      return currentUser.id !== user.id;
    });
    resolve(true);
  });
}

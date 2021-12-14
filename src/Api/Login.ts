import UserType from "../Models/User";
import { v4 as uuidv4 } from "uuid";

interface LoginReturnType {
  token: string;
  user: UserType;
}

export function loginUser(
  username: string,
  password: string
): Promise<LoginReturnType> {
  return new Promise((resolve, reject) => {
    if (username === "matt" && password === "sdfsdf") {
      const loginObj: LoginReturnType = {
        token: uuidv4(),
        user: {
          firstName: "Matt",
          lastName: "Kuhns",
          gender: "male",
          birthdate: "1990-03-15",
          maritalStatus: "married",
          comment: "Cool guy",
          salary: 123321,
          id: uuidv4(),
          active: true,
        },
      };
      setTimeout(() => resolve(loginObj), 1000);
    } else {
      setTimeout(() => reject("Invalid username/password"), 1000);
    }
  });
}

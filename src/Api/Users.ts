import axios from "axios";

export function getUsers() {
  return axios.get("https://random-data-api.com/api/users/random_user?size=20");
}

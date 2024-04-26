import axios from "axios";
import { apiClient } from "./axios";

//register with email, password, name, username
// {
//   "Email": "default@gmail.com",
//   "Password": "P@ssw0rd",
//   "Name": "Default",
//   "Username": "Default"
// }

export const signUp = async ({ Email, Password, Name, Username }) => {
  return axios.post(
    `${apiClient}/user/register`,
    {
      Email,
      Password,
      Name,
      Username,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};

export const signIn = async ({ Email, Password }) => {
  return axios.post(
    `${apiClient}/user/login`,
    {
      Email,
      Password,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}

export const signOut = async () => {
  return axios.get(`${apiClient}/user/logout`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

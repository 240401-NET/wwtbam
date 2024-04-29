import axios from "axios";
import { Token } from "../types";

//register with email, password, name, username
// {
//   "Email": "default@gmail.com",
//   "Password": "P@ssw0rd",
//   "Name": "Default",
//   "Username": "Default"
// }
const baseUrl = "/api/User";
export const signUp = async ( Email: string, Password: string, Name: string, Username: string ) => {
  const url = `${baseUrl}/register`;
  console.log(url);
  try {
  const data = await axios.post<Token>(
    url,
    {
      Email: Email,
      Password: Password,
      Name: Name,
      Username: Username,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(data);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errMessage = error.response?.data.message;
      throw new Error(errMessage)
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const signIn = async (Username: string, Password: string ) => {
  try {
  const data = await axios.post<Token>(
    `${baseUrl}/login`,
    {
      Username: Username,
      Password: Password,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return data;
} catch (error) {
  console.error(error);
}
}

export const signOut = async () => {
  return axios.get(`${baseUrl}/logout`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

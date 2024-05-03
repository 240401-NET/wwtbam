import axios from "axios"; 

import { Token } from "../types"; 

 

const baseUrl = "/api/User"; 

 

 export const signUp = async (  

  Email: string,  

  Password: string,  

  Username: string, 

  Name: string 

) => { 

  const url = `${baseUrl}/register`; 

  console.log(url); 

  try { 

  const data = await axios.post<Token>( 

    url, 

    { 

      Email: Email, 

      Password: Password, 

      Username: Username, 

      Name: Name 

       

    }, 

    { 

      withCredentials: true, 

      headers: { 

        "Content-Type": "application/json", 

        Accept: "application/json", 

      }, 

    }); 

    console.log("DATA", data); 

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
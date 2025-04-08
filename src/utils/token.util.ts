import { jwtDecode } from "jwt-decode";
import { getLocalStorage } from "./localStorage.util";

interface Decode {
  email: string;
  iat: number;
  id: string;
  username: string;
}
export const decodeToken = async (token:string) => {
    try {
      const decode: Decode| null = jwtDecode(token);
      if(!decode) throw new Error("Error decoding token");
      return { iat: decode.iat,  id: decode.id  }
    } catch (error) {
      throw new Error(`Error decoding token --> ${error}`);  
    }
}
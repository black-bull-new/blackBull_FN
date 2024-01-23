import axios from "./axios"
import { Register } from "./types";
export const loginUser = async (email: string, password: string) =>
  axios
    .post("/login", { email, password })
    .then((response: any) => response.data)
    .catch((error: any) => {
      throw error;
    });

export const createUser = (payload: Register) => {
  const axiosConfig = {
    method: "post",
    url: "/add-user",
    data: payload
  }

  console.log({ axiosConfig })

  return axios.request(axiosConfig);
}


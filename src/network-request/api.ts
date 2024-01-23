import axios from "./axios"
import { Register } from "./types";
export const loginUser = async (email: string, password: string) =>
  axios
    .post("/login", { email, password })
    .then((response: any) => response.data)
    .catch((error: any) => {
      throw error;
    });

// export const register = ({ firstName, lastName, email, number, designation, companyName, profEmail, address, password, role }: Register) => {
//   return axios.post("/add-user", { firstName, lastName, email, number, designation, companyName, profEmail, address, password, role }).then((response: any) => response.data);
// };

export const createUser = (payload: Register) => {
  const axiosConfig = {
    method: "post",
    maxBodyLenght: Infinity,
    url: "/add-user",
    data: payload
  }

  console.log({ axiosConfig })

  return axios.request(axiosConfig);
}


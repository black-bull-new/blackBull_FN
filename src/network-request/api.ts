import axios from "./axios"
export const loginUser = async (email: string, password: string) =>
  axios
    .post("/login", { email, password })
    .then((response: any) => response.data)
    .catch((error: any) => {
      throw error;
    });

export const register = ({ email, password,username }: Register) => {
  return axios.post("/signup", { email, password, username }).then((response:any)=>response.data);
};

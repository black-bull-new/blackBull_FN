import axios from "./axios"
export const loginUser = async (email: string, password: string) =>
  axios
    .post("/user/login", { email, password })
    .then((response: any) => response.data)
    .catch((error: any) => {
      throw error;
    });

export const register = ({ firstName, lastName, email, number,designation, companyName, profEmail, address, password , role}: Register) => {
  return axios.post("/add-user", { firstName, lastName, email, number,designation, companyName, profEmail, address, password, role}).then((response:any)=>response.data);
};

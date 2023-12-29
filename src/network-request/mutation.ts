import { useMutation } from "react-query";
import { loginUser, register } from "./api";

export const useLogin = () =>
  useMutation(({ email, password }: Login) => loginUser(email, password));

  export const useRegister = () =>
  useMutation(({ email, password, username }: Register) =>
    register({ username, email, password })
  );

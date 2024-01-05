import { UseQueryOptions, useMutation, useQuery } from "vue-query";
import { getUser, login, register } from "./auth";
import { ILoginBody, IRegisterBody } from "@/types/auth.types";

export const loginMutation = (options?: UseQueryOptions) => {
  return useMutation({
    mutationFn: (body: ILoginBody) => login(body),
  });
};
export const registerMutation = (options?: UseQueryOptions) => {
  return useMutation({
    mutationFn: (body: IRegisterBody) => register(body),
  });
};

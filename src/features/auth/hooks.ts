import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMe, login, logout } from "./api";
import type { LoginForm } from "../../shared/schemas";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => fetchMe(),
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: LoginForm) => login(data),
    onSuccess: (user) => queryClient.setQueryData(["me"], user),
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => queryClient.clear(),
  });
}

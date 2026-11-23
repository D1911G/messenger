import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { messageKeys } from "./keys";
import { fetchMessages, sendMessage } from "./api";

export function useMessages(chatId: number) {
  return useQuery({
    queryKey: messageKeys.byChat(chatId),
    queryFn: () => fetchMessages(chatId),
    enabled: !Number.isNaN(chatId),
  });
}
export function useSendMessage(chatId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: string) => sendMessage(chatId, body),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: messageKeys.byChat(chatId),
      }),
  });
}

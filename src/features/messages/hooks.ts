import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { messageKeys } from "./keys";
import { fetchChats, fetchMessages, sendMessage } from "./api";
import type { Message } from "../../shared/types";
import { CURRENT_USER } from "../../shared/mockData";

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
    onMutate: async (body: string) => {
      await queryClient.cancelQueries({ queryKey: messageKeys.byChat(chatId) });
      const previousMessages = queryClient.getQueryData<Message[]>(
        messageKeys.byChat(chatId),
      );
      const optimisticMessage: Message = {
        id: Date.now(),
        chatId,
        from: CURRENT_USER,
        date: Date.now(),
        body,
      };
      queryClient.setQueryData<Message[]>(messageKeys.byChat(chatId), (old) =>
        old ? [...old, optimisticMessage] : [optimisticMessage],
      );

      return { previousMessages };
    },
    onError: (error, body, context) => {
      if (context?.previousMessages) {
        queryClient.setQueryData(
          messageKeys.byChat(chatId),
          context.previousMessages,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: messageKeys.byChat(chatId) });
    },
  });
}
export function useChats() {
  return useQuery({
    queryKey: ["chats"],
    queryFn: fetchChats,
  });
}

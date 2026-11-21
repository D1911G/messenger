export const messageKeys = {
  all: ["messages"] as const,
  byChat: (chatId: string) => [...messageKeys.all, chatId] as const,
};

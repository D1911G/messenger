export const messageKeys = {
  all: ["messages"] as const,
  byChat: (chatId: number) => [...messageKeys.all, chatId] as const,
};

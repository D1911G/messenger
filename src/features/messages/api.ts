import { mockChats, mockMessages, CURRENT_USER } from "../../shared/mockData";
import type { Chat, Message } from "../../shared/types";

const db: Message[] = [...mockMessages];

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function fetchChats(): Promise<Chat[]> {
  await delay(500);
  return mockChats;
}

export async function fetchMessages(chatId: number): Promise<Message[]> {
  await delay(500);
  return db.filter((m) => m.chatId === chatId);
}

export async function sendMessage(
  chatId: number,
  body: string,
): Promise<Message> {
  await delay(500);
  const message: Message = {
    id: Date.now(),
    chatId,
    from: CURRENT_USER,
    date: Date.now(),
    body,
  };
  db.push(message);
  return message;
}

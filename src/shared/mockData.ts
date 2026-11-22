import type { Chat, Message } from "./types";

export const CURRENT_USER = "me";

const now = Date.now();
const minutesAgo = (m: number) => now - m * 60_000;

export const mockChats: Chat[] = [
  { id: 1, name: "Анна" },
  { id: 2, name: "Макс" },
  { id: 3, name: "Лена" },
  { id: 4, name: "Дима" },
];

export const mockMessages: Message[] = [
  {
    id: 1,
    chatId: 1,
    from: "Анна",
    date: minutesAgo(60),
    body: "Привет! Как дела?",
  },
  {
    id: 2,
    chatId: 1,
    from: CURRENT_USER,
    date: minutesAgo(55),
    body: "Привет, всё хорошо. А у тебя?",
  },
  {
    id: 3,
    chatId: 1,
    from: "Анна",
    date: minutesAgo(50),
    body: "Тоже норм, делаю мессенджер",
  },
  {
    id: 4,
    chatId: 1,
    from: CURRENT_USER,
    date: minutesAgo(45),
    body: "О, я тоже!",
  },
  {
    id: 5,
    chatId: 1,
    from: "Анна",
    date: minutesAgo(10),
    body: "Тогда поделимся опытом",
  },
  {
    id: 6,
    chatId: 2,
    from: "Макс",
    date: minutesAgo(200),
    body: "Завтра созвон в 15:00",
  },
  {
    id: 7,
    chatId: 2,
    from: CURRENT_USER,
    date: minutesAgo(190),
    body: "Принял, буду",
  },
  {
    id: 8,
    chatId: 3,
    from: "Лена",
    date: minutesAgo(1440),
    body: "Скинь файл, пожалуйста",
  },
];

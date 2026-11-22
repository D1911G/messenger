export type Chat = {
  id: number;
  name: string;
};

export type Message = {
  id: number;
  chatId: number;
  from: string;
  date: number;
  body: string;
};

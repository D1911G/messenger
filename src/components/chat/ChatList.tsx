import { useChats } from "../../features/messages/hooks";
import ChatListItem from "./ChatListItem";

export default function ChatList() {
  const { data: chats = [], isPending } = useChats();
  if (isPending) return <p>Загрузка чатов...</p>;
  return (
    <ul>
      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </ul>
  );
}

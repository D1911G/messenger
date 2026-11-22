import { mockChats } from "../../shared/mockData";
import ChatListItem from "./ChatListItem";

export default function ChatList() {
  return (
    <ul>
      {mockChats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </ul>
  );
}

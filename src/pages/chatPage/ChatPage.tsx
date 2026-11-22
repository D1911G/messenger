import { useParams } from "react-router-dom";
import { mockMessages } from "../../shared/mockData";
import MessageList from "../../components/chat/MessageList";

export default function ChatPage() {
  const { chatId } = useParams();

  const messages = mockMessages.filter((m) => m.chatId === Number(chatId));

  return <MessageList messages={messages} />;
}

import { useParams } from "react-router-dom";
import MessageList from "../../components/chat/MessageList";
import MessageInput from "../../components/chat/messageInput/MessageInput";
import { useMessages } from "../../features/messages/hooks";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import ChatHeader from "../../components/chat/chatHeader/ChatHeader";

export default function ChatPage() {
  const { chatId } = useParams();
  const id = Number(chatId);
  const { data: messages = [], isPending } = useMessages(id);
  if (Number.isNaN(id)) return <NotFoundPage />;
  if (isPending) return <p>Loading...</p>;

  return (
    <>
      <ChatHeader chatId={id}></ChatHeader>
      <MessageList messages={messages} />
      <MessageInput chatId={id} />
    </>
  );
}

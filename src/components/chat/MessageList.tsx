import type { Message } from "../../shared/types";
import MessageBubble from "./MessageBubble";
import styles from "./MessageList.module.css";

type Props = { messages: Message[] };

export default function MessageList({ messages }: Props) {
  if (messages.length === 0)
    return <p className={styles.empty}>Нет сообщений. Начните общение!</p>;
  return (
    <div className={styles.list}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}

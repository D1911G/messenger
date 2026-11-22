import type { Message } from "../../shared/types";
import { CURRENT_USER } from "../../shared/mockData";
import styles from "./MessageBubble.module.css";

type Props = { message: Message };

export default function MessageBubble({ message }: Props) {
  const isMine = message.from === CURRENT_USER;

  return (
    <div className={`${styles.bubble} ${isMine ? styles.mine : styles.theirs}`}>
      {message.body}
    </div>
  );
}

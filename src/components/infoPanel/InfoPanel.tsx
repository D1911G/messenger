import { useParams } from "react-router-dom";
import { useChats } from "../../features/messages/hooks";
import styles from "./InfoPanel.module.css";

export default function InfoPanel() {
  const { chatId } = useParams();
  const id = Number(chatId);
  const { data: chats = [], isPending } = useChats();

  const chat = chats.find((c) => c.id === id);

  let content;
  if (Number.isNaN(id)) {
    content = <p>Выберите чат, чтобы увидеть информацию.</p>;
  } else if (isPending) {
    content = <p>Загрузка...</p>;
  } else if (!chat) {
    content = <p>Чат не найден</p>;
  } else {
    content = (
      <>
        <div className={styles.avatar} aria-hidden="true">
          {chat.name[0]}
        </div>
        <h3 className={styles.name}>{chat.name}</h3>
        <p className={styles.meta}>ID чата: {chat.id}</p>
      </>
    );
  }

  return (
    <aside className={styles.infoPanel}>
      <h2>Информация</h2>
      {content}
    </aside>
  );
}

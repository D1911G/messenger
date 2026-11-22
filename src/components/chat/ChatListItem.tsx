import { NavLink } from "react-router-dom";
import type { Chat } from "../../shared/types";
import styles from "./ChatListItem.module.css";

type Props = { chat: Chat };
export default function ChatListItem({ chat }: Props) {
  return (
    <li>
      <NavLink
        to={`/chats/${chat.id}`}
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        {chat.name}
      </NavLink>
    </li>
  );
}

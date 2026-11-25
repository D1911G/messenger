import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { toggleTheme } from "../../app/store/uiSlice";
import ChatList from "../chat/ChatList";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  return (
    <aside className={styles.sidebar}>
      <button onClick={() => dispatch(toggleTheme())}>Тема: {theme}</button>
      <ChatList />
    </aside>
  );
}

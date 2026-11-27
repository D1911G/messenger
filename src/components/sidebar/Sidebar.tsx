import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { toggleTheme } from "../../app/store/uiSlice";
import { useLogout, useMe } from "../../features/auth/hooks";
import ChatList from "../chat/ChatList";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const { data: user } = useMe();
  const { mutate: logout } = useLogout();
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout(undefined, { onSuccess: () => navigate("/login") });
  };
  return (
    <aside className={styles.sidebar}>
      <button onClick={() => dispatch(toggleTheme())}>Тема: {theme}</button>
      <p>{user?.name}</p>
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
      <ChatList />
    </aside>
  );
}

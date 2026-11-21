import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { toggleTheme } from "../../app/store/uiSlice";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <button onClick={() => dispatch(toggleTheme())}>Тема: {theme}</button>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

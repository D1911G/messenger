import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/hooks";

import styles from "./AppLayout.module.css";

import Sidebar from "../sidebar/Sidebar";
import InfoPanel from "../infoPanel/InfoPanel";

export default function AppLayout() {
  const isInfoPanelOpen = useAppSelector((state) => state.ui.isInfoPanelOpen);

  return (
    <div
      className={`${styles.layout} ${isInfoPanelOpen ? styles.layoutWithPanel : ""}`}
    >
      <Sidebar></Sidebar>
      <main className={styles.main}>
        <Outlet />
      </main>
      {isInfoPanelOpen && <InfoPanel></InfoPanel>}
    </div>
  );
}

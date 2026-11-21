import { useEffect } from "react";
import "./App.css";
import { useAppSelector } from "./hooks/hooks";

import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import ChatPage from "../pages/chatPage/ChatPage";

import RegisterPage from "../pages/registerPage/RegisterPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import AppLayout from "../components/layout/AppLayout";

function App() {
  const theme = useAppSelector((state) => state.ui.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/chats/:chatId" element={<ChatPage />}></Route>
      </Route>

      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;

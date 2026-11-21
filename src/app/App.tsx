import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { toggleTheme } from "./store/uiSlice";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import ChatPage from "../pages/chatPage/ChatPage";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import RegisterPage from "../pages/registerPage/RegisterPage";

function App() {
  const theme = useAppSelector((state) => state.ui.theme);

  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-300">Hello</h1>
      <button onClick={() => dispatch(toggleTheme())}>Тема: {theme}</button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/chats/:chatId" element={<ChatPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

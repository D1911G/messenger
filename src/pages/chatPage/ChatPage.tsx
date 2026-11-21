import React from "react";
import { useParams } from "react-router-dom";

export default function ChatPage() {
  const { chatId } = useParams();

  return <div>ChatPage {chatId}</div>;
}

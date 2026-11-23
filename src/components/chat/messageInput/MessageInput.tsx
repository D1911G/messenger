import { useState, type FormEvent } from "react";
import { useSendMessage } from "../../../features/messages/hooks";
type Props = { chatId: number };
export default function MessageInput({ chatId }: Props) {
  const [inputText, setInputText] = useState("");
  const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    mutate(inputText);
    setInputText("");
  };

  const addFileHandler = () => {
    alert("Add file please");
  };

  const { mutate } = useSendMessage(chatId);

  return (
    <div>
      <form onSubmit={sendMessageHandler}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          aria-label="Сообщение"
          placeholder="Напишите сообщение..."
        ></input>
        <button disabled={inputText.trim() === ""}>Send</button>
        <button type="button" onClick={addFileHandler}>
          Add file
        </button>
      </form>
    </div>
  );
}

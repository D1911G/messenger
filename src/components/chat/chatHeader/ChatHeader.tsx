import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { toggleInfoPanel } from "../../../app/store/uiSlice";
import { useChats } from "../../../features/messages/hooks";

type Props = {
  chatId: number;
};

export default function ChatHeader({ chatId }: Props) {
  const { data: chats = [], isPending } = useChats();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isInfoPanelOpen);

  if (isPending) return <p>Загрузка...</p>;

  const chat = chats.find((c) => c.id === chatId);

  return (
    <>
      <h2>{chat?.name ?? "Чат не найден"}</h2>
      <button type="button" onClick={() => dispatch(toggleInfoPanel())}>
        {isOpen ? "Закрыть" : "Открыть"}
      </button>
    </>
  );
}

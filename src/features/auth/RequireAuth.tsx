import { Navigate, Outlet } from "react-router-dom";
import { useMe } from "./hooks";

export default function RequireAuth() {
  const { data: user, isPending } = useMe();

  if (isPending) return <p>Загрузка...</p>;
  if (user === null) return <Navigate to="/login" replace></Navigate>;

  return <Outlet></Outlet>;
}

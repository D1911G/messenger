import type { LoginForm } from "../../shared/schemas";
import type { User } from "../../shared/types";

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
const users = [
  { id: 1, name: "Тест", email: "test@test.com", password: "12345678" },
];
export async function login(data: LoginForm): Promise<User> {
  await delay(300);

  const currentUser = users.find((u) => u.email === data.email);

  if (!currentUser || currentUser.password !== data.password) {
    throw new Error("Логин/пароль неверны");
  }
  const user: User = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
  };
  localStorage.setItem("session", JSON.stringify(user));
  return user;
}

export async function fetchMe(): Promise<User | null> {
  await delay(300);
  try {
    const saved = localStorage.getItem("session");
    if (saved) return JSON.parse(saved) as User;
  } catch {
    // в localStorage мусор или он недоступен, считаем, что не вошёл
  }
  return null;
}

export async function logout(): Promise<void> {
  await delay(300);
  localStorage.removeItem("session");
}

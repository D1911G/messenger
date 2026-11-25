import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Имя должно содержать минимум 2 символа"),
  email: z.email("Введите корректный email"),
  password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
});

export type RegisterForm = z.infer<typeof registerSchema>;

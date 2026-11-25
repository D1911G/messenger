import { useForm } from "react-hook-form";
import type { LoginForm } from "../../shared/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../shared/schemas";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Логин</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </div>

        <button type="submit">Логин</button>
      </form>
    </div>
  );
}

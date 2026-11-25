import { useForm } from "react-hook-form";
import type { RegisterForm } from "../../shared/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../shared/schemas";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">Имя</label>
          <input id="name" type="text" {...register("name")} />
          {errors.name && <p role="alert">{errors.name.message}</p>}
        </div>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

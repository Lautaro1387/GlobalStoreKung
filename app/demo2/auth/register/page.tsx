"use client";

import { POST } from "@/app/api/auth/register/route";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler  } from "react-hook-form";


interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormData>();

const router = useRouter()

const onSubmit: SubmitHandler<FormData> = (async (data) => {
    
  if (data.password !== data.confirmPassword) {
    return alert("Password do not mach");
  }
  
  const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      router.push('/demo2/auth/login')
    }
    console.log(res)
});

  console.log(errors);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Registro</h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Nombre de usuario
          </label>
          <input
            id="username"
            type="text"
            placeholder="examplename"
            {...register("username", {
              required: "Nombre de usuario es requerido",
            })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.username && (
            <span className="text-red-600 text-sm">
                {errors.username.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            {...register("email", { required: "Correo es requerido" })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">
                {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"

            {...register("password", { required: "Contraseña es requerida" })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.password && (
            <span className="text-red-600 text-sm">
                {errors.password.message}
            </span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Repetir contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="********"
            {...register("confirmPassword", {
              required: "Confirmar contraseña es requerido",
            })}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.confirmPassword && (
            <span className="text-red-600 text-sm">
                {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}

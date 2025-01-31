"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler  } from "react-hook-form";


interface FormData {
    email: string;
    password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormData>();

const router = useRouter()
const [error, setError] = useState<string | null>(null)

const onSubmit: SubmitHandler<FormData> = (async (data) => {
  console.log(data);
  const res = await signIn('credentials', { // Se pueden usar varios metodos de Login, Google, Github, etc.
    email: data.email,
    password: data.password,
    redirect: false
  }) 
  if (!res) {
    alert("No se pudo obtener respuesta de signIn");
    return;
  }
  if (res.error) {
    setError(res.error)
  } else {
    router.push('/demo2/dashboard')
  }
  console.log(res)
});

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {error && (
          <p className="bg-red-500 text-lg p-3 text-white rounded">{error}</p>
        )}
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>


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
            <span className="text-red-600">
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
            <span className="text-red-600">
                {errors.password.message}
            </span>
          )}
        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}

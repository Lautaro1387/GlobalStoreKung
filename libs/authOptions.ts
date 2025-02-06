// lib/authOptions.ts
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        console.log("authorize() called with credentials:", credentials);
        if (!credentials || !credentials.email || !credentials.password) {
          console.log("Faltan credenciales");
          throw new Error("Faltan credenciales");
        }
        const { email, password } = credentials as { email: string; password: string };
      
        const userFound = await db.user.findUnique({ where: { email } });
        if (!userFound) {
          console.log("No se encontró usuario con email:", email);
          throw new Error("No se encontró usuario");
        }
      
        console.log("Usuario encontrado:", { email: userFound.email, hash: userFound.password });
        const matchPassword = await bcrypt.compare(password, userFound.password);
        console.log("Comparación de contraseña (resultado):", matchPassword);
        if (!matchPassword) {
          console.log("Contraseña incorrecta para email:", email);
          throw new Error("Contraseña incorrecta");
        }
      
        console.log("Autenticación exitosa para:", email);
        return {
          id: userFound.user_id.toString(),
          name: userFound.username,
          email: userFound.email,
        };
      }
    }),
  ],
  pages: {
    signIn: "/demo2/auth/login",
  },
  debug: true,
};

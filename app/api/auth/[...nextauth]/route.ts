import NextAuth, { AuthOptions } from "next-auth";
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
      // Deja que NextAuth infiera el tipo; no pongas : Promise<...>
      // @ts-ignore
      async authorize(credentials) {
        // Verificamos que credentials exista
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Buscamos en la DB (ajusta campos a tu modelo real de Prisma)
        const userFound = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!userFound) {
          // NextAuth capturará este error y lo tratará como error de credenciales
          throw new Error("No user found");
        }

        // Comparar la contraseña
        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) {
          throw new Error("Wrong password");
        }

        // Retornamos el objeto "user" con las claves que NextAuth espera
        return {
          id: userFound.user_id,             // O userFound.user_id.toString() si prefieres string
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/demo2/auth/login",
  },
  debug: true,
};

console.log(">>>>> I AM INSIDE THE [...nextauth]/route.ts FILE <<<<<");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

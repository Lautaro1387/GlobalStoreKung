// lib/auth.js
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import db from '@/libs/db'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!userFound) throw new Error('No user found')

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        )
        if (!matchPassword) throw new Error('Wrong password')

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
}

// Exporta una instancia de NextAuth también, si quieres
const handler = NextAuth(authOptions)
export default handler

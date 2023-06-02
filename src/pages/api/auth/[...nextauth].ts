import { addUser } from "@/service/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user: { id, name, email } }) {
      addUser({ id, name, email });
      return true;
    },
    async session({ session }) {
      // console.log(session);
      return session;
    },
  },
};

export default NextAuth(authOptions);

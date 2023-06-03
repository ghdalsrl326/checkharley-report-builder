import { addUser } from "@/service/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
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
      if (!email) {
        return false;
      }
      addUser({ id, name: name || "", email });
      return true;
    },
    async session({ session }) {
      // console.log(session);
      return session;
    },
  },
};

export default NextAuth(authOptions);

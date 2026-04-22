// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liDrt9VVhEPt9HQE",
      clientSecret: "c9cf21a43c480256bc1d4dda1d58bdb430e60779",
    }),
  ],
  secret: "x7k9m2p5q8r3s6t1u4v7w0y3z6a9b2c5",
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "Ov23liSuwJQUIYLlPoOf",
      clientSecret: process.env.GITHUB_SECRET || "7eb15674d3b47179815a84d4d8346d33e33885ca",
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
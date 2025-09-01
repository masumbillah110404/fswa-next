import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // ✅ check against env allowed emails
      const allowedEmails = process.env.ALLOWED_EMAILS.split(",");
      if (allowedEmails.includes(user.email)) {
        return true;
      }
      return false; // deny if not allowed
    },
    async session({ session }) {
      // pass email to client
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

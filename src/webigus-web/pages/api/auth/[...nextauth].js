import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";

import api from '@/services/api.js'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      console.log( user, account, profile )

      // obj = await api.post(`auth/register`, {
      //   "first_name" : "Adriana",
      //   "last_name" : "Pereira Santos",
      //   "email" : "a2@gmail.com",
      //   "username" : "a2",
      //   "auth_provider": "google",
      //   "photo" : null
      // });

      console.log( "OBJ", user )

      // Redirect to a specific page after successful sign-in
      return "/";
    },
  },
};

export default NextAuth(authOptions);

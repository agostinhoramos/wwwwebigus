import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import { frontendApi } from '@/services/api.js'

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
      const provider = user.account.provider
      const picture = user.profile.picture
      const email = user.profile.email
      const email_verified = user.profile.email_verified
      const locale = user.profile.locale
      const given_name = user.profile.given_name
      const family_name = user.profile.family_name

      if( !email_verified ){
        return "/login"
      }
      
      return "/";
    },
  },
};

export default NextAuth(authOptions);

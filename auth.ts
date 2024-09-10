import NextAuth from "next-auth";
import facebook from "next-auth/providers/facebook";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import instagram from "next-auth/providers/instagram";
import tiktok from "next-auth/providers/tiktok";
import twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github, google, facebook, twitter, tiktok, instagram],
});

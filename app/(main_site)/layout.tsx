import type { Metadata } from "next";
import "../globals.css";
import {
  appWebsite,
  authorUrl,
  brandName,
  siteName,
  siteUserName,
} from "@/lib/utils";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: `${brandName}- Shop, Sell, and Connect`,
  description: `${brandName} is a social-commerce platform that allows users to shop for a wide range of products, connect with sellers, and engage with other users. Shop the best products, discover trending shops, and interact with buyers and sellers through comments, likes, and reviews.`,
  keywords:
    "online market, e-commerce, social commerce, Awka, shop online, trending products, user shops, product comments, short product videos, buy and sell, product reviews",
  authors: [{ name: "Ifeanyi Okoloma", url: authorUrl }],
  openGraph: {
    type: "website",
    url: appWebsite,
    description:
      "Join Awka Online Market, the social-commerce platform where users can shop, sell, and connect. Discover the best shops, products, and user-generated content in Awka.",
    siteName: siteName,
  },
  twitter: {
    card: "summary_large_image",
    site: `@${siteUserName}`,
    creator: "@ifeanyiokoloma",
  },
  robots: "index, follow",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

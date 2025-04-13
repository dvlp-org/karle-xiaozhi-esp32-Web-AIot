import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "$BEST Token Presale: Best Crypto Presale & Coin Launch 2025",
  description: "Best Wallet Token powers the fastest-growing mobile crypto wallet ecosystem. Buy $BEST token in presale to enjoy exclusive holder benefits!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

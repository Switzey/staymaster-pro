import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StayMaster Pro",
  description: "Professional hospitality management system for modern accommodation teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

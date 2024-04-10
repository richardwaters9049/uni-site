import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  weight: ["500"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "UniCourse",
  description: "Higher Education Online Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  );
}

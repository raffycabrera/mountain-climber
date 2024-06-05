import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/sidenav";
import styles from "@/app/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mountain Climber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <SideNav />
        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
}

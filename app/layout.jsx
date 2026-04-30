import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Next.js 타임어택 실습",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen`}>
        <header className="fixed top-0 w-full h-20 p-4 flex justify-center bg-white font-bold text-4xl shadow">
          <Link href="/todos">Today plan</Link>
        </header>
        <main className="flex justify-center pt-20">{children}</main>
      </body>
    </html>
  );
}

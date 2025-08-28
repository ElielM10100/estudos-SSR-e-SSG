import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <span>Mini Blog</span>
          </Link>

          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/posts" className="hover:underline">Posts</Link>
            <Link href="/about" className="hover:underline">Sobre</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-1">{children}</main>

      <footer className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 text-center">
          Feito com ❤️ em Next.js — demo educacional
        </div>
      </footer>
    </div>
  );
}

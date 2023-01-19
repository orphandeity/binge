import './globals.css';
import { RiMovieFill } from 'react-icons/ri';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="text-slate-900">
        <header className="flex items-end justify-between overflow-hidden px-3 py-2">
          <Link href="/">
            <div className="relative flex items-center text-5xl font-bold text-slate-50">
              <RiMovieFill />
              <h1>Binge.</h1>
              <div className="absolute -inset-6 -z-10 -skew-x-12 bg-slate-900" />
            </div>
          </Link>
          <div className="flex items-center gap-3 text-lg font-semibold">
            <Link href="/tv">TV</Link>
            <Link href="/movies">Movies</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

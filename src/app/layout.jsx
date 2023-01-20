import './globals.css';
import { RiMovieFill } from 'react-icons/ri';
import { SiThemoviedatabase } from 'react-icons/si';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.variable}>
      <head />
      <body className='min-h-screen text-slate-900'>
        <header className='flex items-end justify-between overflow-hidden bg-white px-3 py-2 shadow-sm'>
          <Link href='/'>
            <div className='relative flex items-center text-5xl font-bold text-white'>
              <RiMovieFill className='z-50' />
              <h1 className='z-50'>Binge.</h1>
              <div className='absolute -inset-6 -skew-x-12 bg-slate-900' />
            </div>
          </Link>
          <div className='flex items-center gap-3 text-lg font-semibold'>
            <Link href='/tv'>TV</Link>
            <Link href='/movies'>Movies</Link>
          </div>
        </header>
        {children}
        <footer className='fixed bottom-0 w-full'>
          <div className='flex items-center justify-end gap-1 py-2 px-3 text-slate-700'>
            <p className='text-sm font-light'>
              all content is courtesy of themoviedb.org
            </p>
            <SiThemoviedatabase className='text-2xl' />
          </div>
        </footer>
      </body>
    </html>
  );
}

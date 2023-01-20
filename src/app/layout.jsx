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
      <body className='mx-auto min-h-screen pt-[64px] text-slate-900 lg:container'>
        <header className='fixed top-0 left-0 right-0 z-50 flex items-end justify-between overflow-hidden bg-white py-2 px-3 shadow lg:container lg:mx-auto'>
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
        <footer
          style={{
            boxShadow:
              '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)',
          }}
          className='fixed bottom-0 left-0 right-0 mx-auto bg-white px-3 py-2 lg:container lg:px-0'
        >
          <div className='flex items-center justify-end gap-1 text-slate-400 lg:pr-3'>
            <p className='text-sm font-light italic'>
              all content is courtesy of themoviedb.org
            </p>
            <SiThemoviedatabase className='text-2xl' />
          </div>
        </footer>
      </body>
    </html>
  );
}

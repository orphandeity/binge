import Image from 'next/image';
import popcorn from '../assets/popcorn.jpg';

export default function Home() {
  return (
    <main>
      <div className='relative'>
        <h2 className='mt-40 text-center text-7xl font-extralight text-slate-500 drop-shadow-md'>
          Find details on the latest{' '}
          <span className='bg-gradient-to-t from-red-500 to-yellow-200 bg-clip-text font-semibold text-transparent'>
            trending
          </span>{' '}
          hits!
        </h2>
        <div className='absolute -inset-1 -z-30 rounded-full bg-white blur-3xl' />
      </div>
      <Image src={popcorn} sizes='100vw' fill className='-z-50 object-cover' />
    </main>
  );
}

import Image from 'next/image';
import popcorn from '../assets/popcorn.jpg';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className='container relative mx-auto'>
      <Image src={popcorn} alt='' fill className='-z-50 object-cover' />
      <h1 className='font- pt-8 text-center text-5xl font-black leading-relaxed text-red-500 drop-shadow-md'>
        Find the
        <br />
        next
        <br />
        Binge-worthy hit!
      </h1>
      <SearchBar />
    </main>
  );
}

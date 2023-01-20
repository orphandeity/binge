import Image from 'next/image';
import Link from 'next/link';

const getTrendingShows = async () => {};

const TV = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/trending/tv/week`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
    }
  );
  const { results } = await res.json();

  return (
    <main>
      <section>
        <h2 className='py-6 text-center text-3xl font-light sm:text-4xl xl:text-5xl'>
          What's <span className='font-semibold'>trending</span> this week?
        </h2>
        <div className='flex items-center justify-center px-3 py-2'>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {results.map(r => (
              <Link key={r.id} href={`/tv/${r.id}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500${r.poster_path}`}
                  alt={r.name}
                  width={500}
                  height={800}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TV;

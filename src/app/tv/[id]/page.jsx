import Image from 'next/image';

export async function generateStaticParams() {
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

  return results.map(r => ({
    id: r.id.toString(),
  }));
}

const Movie = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tv/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();

  return (
    <main className='pb-16'>
      {/* backdrop image */}
      <div className='relative mx-auto aspect-video'>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${data.backdrop_path}`}
          alt={data.name}
          fill
          sizes='100vw'
          className='object-cover'
        />
        <h2 className='absolute bottom-0 left-0 z-50 w-full bg-gradient-to-t from-slate-900/70 to-transparent px-3 py-2 text-4xl font-thin text-white sm:text-5xl md:text-6xl lg:text-7xl'>
          {data.name}
        </h2>
      </div>

      {/* genres */}
      <div className='flex flex-col px-3 lg:px-0'>
        <div className='flex flex-wrap items-center justify-end gap-3 py-2'>
          {data.genres.map(genre => (
            <div
              key={genre.id}
              className='rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-400'
            >
              {genre.name}
            </div>
          ))}
        </div>

        {/* details */}
        <div>
          <p className='text-sm text-slate-400'>
            <span className='font-semibold'>Seasons: </span>
            {data.number_of_seasons}
          </p>
          <p className='text-sm text-slate-400'>
            <span className='font-semibold'>Episodes: </span>
            {data.number_of_episodes}
          </p>
          <p className='text-sm text-slate-400'>
            <span className='font-semibold'>Last Air Date: </span>
            {data.last_air_date}
          </p>
        </div>

        {/* overview */}
        <p className='pt-2 text-lg font-light'>{data.overview}</p>
      </div>
    </main>
  );
};

export default Movie;

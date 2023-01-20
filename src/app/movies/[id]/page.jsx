import Image from 'next/image';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/trending/movie/week`,
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

  const detailsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
    }
  );
  const details = await detailsResponse.json();

  const creditsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}/credits`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
    }
  );
  const credits = await creditsResponse.json();

  const reviewsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}/reviews`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
    }
  );
  const reviews = await reviewsResponse.json();

  return (
    <main className='pb-[40px]'>
      <div className='relative mx-auto aspect-video'>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${details.backdrop_path}`}
          alt={details.title}
          fill
          sizes='100vw'
          className='-z-50 object-cover'
        />
        <h2 className='absolute left-0 bottom-0 z-40 w-full bg-gradient-to-t from-slate-900/70 to-transparent px-3 py-2 text-4xl font-thin text-white sm:text-5xl md:text-6xl lg:text-7xl'>
          {details.title}
        </h2>
      </div>
      {/* details */}
      <section className='flex flex-col px-3 lg:px-0'>
        {/* genres */}
        <div className='flex flex-wrap items-center justify-end gap-3 py-2'>
          {details.genres.map(genre => (
            <div
              key={genre.id}
              className='rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-400'
            >
              {genre.name}
            </div>
          ))}
        </div>
        <div>
          <p className='text-sm text-slate-400'>
            <span className='font-semibold'>Runtime: </span>
            {details.runtime} minutes
          </p>
          <p className='text-sm text-slate-400'>
            <span className='font-semibold'>Release Date: </span>
            {details.release_date}
          </p>
        </div>
        {/* overview */}
        <hr />
        <p className='pt-2 text-lg font-light'>{details.overview}</p>
      </section>
      {/* credits */}
      <section className='px-3 py-6 lg:px-0'>
        <h3 className='text-center text-2xl font-extralight'>Cast</h3>
        <dl className='grid grid-cols-2 gap-x-3 py-2 text-sm font-light'>
          {credits?.cast
            .sort((a, b) => a.order - b.order)
            .map(c => (
              <Fragment key={c.id}>
                <dt className='text-right'>{c.name}</dt>
                <dd className='text-slate-400'>{c.character}</dd>
              </Fragment>
            ))}
        </dl>
      </section>
      <hr />
      <section className='bg-slate-50 py-6'>
        <h3 className='text-center text-2xl font-extralight'>Reviews</h3>
        <div className='flex flex-col items-center justify-center gap-2 pt-2'>
          {reviews?.results.map(r => (
            <div
              key={r.id}
              className='max-w-xs rounded bg-white px-3 py-2 text-sm shadow-md'
            >
              <p className='pb-2 font-medium underline'>{r.author}</p>
              <p className='italic text-slate-700'>{r.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Movie;

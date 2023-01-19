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

  return results.map((r) => ({
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
    <main>
      <h2 className="text-4xl font-thin">{data.name}</h2>

      {/* backdrop image */}
      <div className="relative mx-auto aspect-video">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${data.backdrop_path}`}
          alt={data.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* genres */}
      <div className="flex flex-wrap items-center justify-around gap-3 py-2">
        {data.genres.map((genre) => (
          <div
            key={genre.id}
            className="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-500"
          >
            {genre.name}
          </div>
        ))}
      </div>

      {/* details */}
      <p className="text-sm text-slate-500">
        <span className="font-semibold">Seasons: </span>
        {data.number_of_seasons}
      </p>
      <p className="text-sm text-slate-500">
        <span className="font-semibold">Episodes: </span>
        {data.number_of_episodes}
      </p>
      <p className="text-sm text-slate-500">
        <span className="font-semibold">Last Air Date: </span>
        {data.last_air_date}
      </p>
      <p className="text-lg">{data.overview}</p>
      {console.log(data)}
    </main>
  );
};

export default Movie;

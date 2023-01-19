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
        <div className="relative px-3 py-2">
          <h2 className="text-xl font-semibold ">
            What's <span className="text-2xl font-bold">trending</span> this
            week?
          </h2>
          <div className="absolute inset-0 -z-10 bg-slate-300" />
        </div>
        <div className="flex items-center justify-center px-3 py-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((r) => (
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

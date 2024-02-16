import { getMovies } from '@/libs/prisma';
import MovieCard from '@/components/MovieCard';
import Link from 'next/link';
import { LoadingIcon } from '@/components/icons';

async function PopularMovies() {
  const movies = await getMovies();

  return (
    <div className="min-w-[300px]">
      <div className="flex items-center justify-between mb-4 whitespace-nowrap">
        <h1>Popular movies</h1>
        <Link href="/discover?category=popular">See all</Link>
      </div>
      <div className="flex flex-col gap-4 max-h-[75vh] overflow-auto">
        {movies.map((popularMovie) => (
          <MovieCard 
            key={popularMovie.title} 
            movie={popularMovie}
          />
        ))}
      </div>
    </div>
  );
}

function PopularMoviesLoading() {
  return (
    <div className="min-w-[300px]">
      <div className="flex items-center justify-between mb-4 whitespace-nowrap">
        <h1>Popular movies</h1>
        <Link href="/discover?category=popular">See all</Link>
      </div>
      <div className="flex flex-col gap-4 max-h-[75vh] overflow-auto items-center justify-center h-[200px]">
        <LoadingIcon />
      </div>
    </div>
  );
}

export { PopularMovies, PopularMoviesLoading }
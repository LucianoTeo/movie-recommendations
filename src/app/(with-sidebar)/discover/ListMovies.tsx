import { getMovies } from '@/libs/prisma';
import MovieCard from '@/components/MovieCard';
import Link from 'next/link';
import { LoadingIcon } from '@/components/icons';

async function ListMovies() {
  const movies = await getMovies();

  return (
    <div className="flex flex-wrap gap-4">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.title} 
          movie={movie}
        />
      ))}
    </div>
  );
}

function ListMoviesLoading() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center h-[200px]">
      <LoadingIcon />
    </div>
  );
}

export { ListMovies, ListMoviesLoading }
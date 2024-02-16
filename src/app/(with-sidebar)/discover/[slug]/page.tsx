import { getMovieBySlug } from '@/libs/prisma';
import { redirect } from 'next/navigation';

type MoviePageProps = {
  params: {
    slug: string;
  };
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { slug } = params;

  const movie = await getMovieBySlug(slug)

  if(!movie) {
    return redirect('/discover')
  }

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}
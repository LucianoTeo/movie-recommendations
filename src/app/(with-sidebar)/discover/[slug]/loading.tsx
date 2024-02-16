import { Loading } from '@/components/Loading';
import { getMovieBySlug } from '@/libs/prisma';
import { redirect } from 'next/navigation';

type MoviePageProps = {
  params: {
    slug: string;
  };
};

export default function MoviePageLoading({ params }: MoviePageProps) {
  return <Loading />
}
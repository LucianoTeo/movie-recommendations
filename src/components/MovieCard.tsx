import Link from "next/link"
import { Movie } from "@/utils/movies"
import createSlug from "@/utils/createSlug";

type MovieCardProps = {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/discover/${createSlug(movie.title)}`}
      className="bg-gray-100 p-5 rounded-xl border hover:border-gray-800 min-w-[250px]"
    >
      <h3>{movie.title}</h3>
      <small>Director: {movie.director}</small>
    </Link>
  )
}
export default MovieCard
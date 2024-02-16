import MovieCard from "@/components/MovieCard"
import Link from "next/link"
import { Suspense } from "react"
import { PopularMovies, PopularMoviesLoading } from "./PopularMovies"
import { LatestRecommendations, LatestRecommendationsLoading } from "./LatestRecomendations"


function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <div className="flex mt-12 flex-col xl:flex-row xl:justify-between gap-8 xl:gap-16">
        
        <Suspense fallback={<LatestRecommendationsLoading />}>
          <LatestRecommendations />
        </Suspense>

        <Suspense fallback={<PopularMoviesLoading />}>
          <PopularMovies />
        </Suspense>
      </div>
    </section>
  )
}

export default HomePage
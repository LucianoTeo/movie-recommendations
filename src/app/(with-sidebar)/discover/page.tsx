import { Suspense } from "react"
import { ListMovies, ListMoviesLoading } from "./ListMovies"

function DiscoverPage() {
  return (
    <section>
      <h1>Discover page</h1>
      <div className="mt-12">
        <Suspense fallback={<ListMoviesLoading />}>
          <ListMovies />
        </Suspense>
      </div>
    </section>
  )
}

export default DiscoverPage
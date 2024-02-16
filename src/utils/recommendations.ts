import { Movie, moviesMocked } from "./movies"
import { Profile, profilesMocked } from "./profile"

export type Recommendation = {
  id: number
  movie: Movie
  profile: Profile
  text?: string
  score: number
  created_at: Date
}

export const recommendationsMocked = [
  {
    id: 0,
    movie: moviesMocked[0],
    profile: profilesMocked[0],
    score: 8,
    text: "Great movie! Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he did'nt commit the crimes.",
    created_at: new Date()
  }
]
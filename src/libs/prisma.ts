import createSlug from "@/utils/createSlug";
import { moviesMocked } from "@/utils/movies";
import { profilesMocked } from "@/utils/profile";
import { recommendationsMocked } from "@/utils/recommendations";

const sleep = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200);
  }, 1000);
});

export async function getMovies() {
  await sleep()
  return moviesMocked
}

export async function getMovieBySlug(slug: string) {
  await sleep()
  
  const movie = moviesMocked.find(movie => {
    if(createSlug(movie.title) === slug) {
      return movie
    }
  })

  return movie
}

export async function getProfiles() {
  await sleep()
  return profilesMocked
}

export async function getRecommendations() {
  await sleep()
  return recommendationsMocked
}
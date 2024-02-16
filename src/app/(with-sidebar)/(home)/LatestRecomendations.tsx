import RecommendationCard from "@/components/RecommendationCard";
import { LoadingIcon } from "@/components/icons";
import { getRecommendations } from "@/libs/prisma";

async function LatestRecommendations() {
  const recommendations = await getRecommendations();
  return (
    <div className="w-full">
      <h1 className="mb-4">Latest recomendations</h1>

      <div className="flex flex-col gap-4">
      {recommendations.map((recommendation) => (
        <RecommendationCard 
          key={recommendation.id} 
          recommendation={recommendation}
        />
      ))}
      </div>
    </div>
  )
}

function LatestRecommendationsLoading() {
  return (
    <div className="w-full">
      <h1 className="mb-4">Latest recomendations</h1>

      <div className="flex flex-col gap-4 items-center justify-center h-[200px]">
        <LoadingIcon />
      </div>
    </div>
  )
}

export { LatestRecommendations, LatestRecommendationsLoading}
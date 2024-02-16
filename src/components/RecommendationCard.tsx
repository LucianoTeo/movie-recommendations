import { dayjs } from '@/libs/dayjs';
import { Recommendation } from "@/utils/recommendations"

type RecommendationCardProps = {
  recommendation: Recommendation
}

function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="bg-gray-100 p-5 rounded-xl border hover:border-gray-800">
      <h3 className="mb-8">
        {recommendation.movie.title}
      </h3>
      <article className="mb-2">
        <p>{recommendation.text}</p>
      </article>
      <small>
        {`${recommendation.profile.name} - 
          ${dayjs(recommendation.created_at).fromNow()}`
        }
      </small>
    </div>
  )
}
export default RecommendationCard
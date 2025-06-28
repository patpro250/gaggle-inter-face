import { Star, StarHalf, StarOff } from "lucide-react"; // or use your own icons

type RatingDisplayProps = {
  rating: number;
  max?: number;
  size?: number;
  color?: string;
};

export const RatingDisplay = ({
  rating,
  max = 5,
  size = 16,
  color = "#facc15", // Tailwind amber-400
}: RatingDisplayProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} color={color} fill={color} />
      ))}
      {hasHalfStar && <StarHalf size={size} color={color} fill={color} />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} size={size} color="#d1d5db" />
      ))}
      <span className="text-sm text-gray-700 ml-2">({rating.toFixed(1)})</span>
    </div>
  );
};

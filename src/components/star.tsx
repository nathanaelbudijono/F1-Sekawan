interface RatingStarsProps {
  rating: string;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const numStars = parseInt(rating);
  const stars = Array.from({ length: numStars }, (_, index) => (
    <span key={index} className="text-blue-950">
      &#9733;
    </span>
  ));
  return <div className="text-xs">{stars}</div>;
}

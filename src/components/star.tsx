import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

interface RatingStarsProps {
  rating: string;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const numericRating = parseFloat(rating);
  const fullStars = Math.floor(numericRating);
  const hasHalfStar = numericRating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="text-blue-950">
        <BiSolidStar />
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="text-blue-950 flex gap-[2px]">
        <BiSolidStar /> <BiSolidStarHalf />
      </span>
    );
  }

  return <div className="text-xs flex gap-[2px]">{stars}</div>;
}

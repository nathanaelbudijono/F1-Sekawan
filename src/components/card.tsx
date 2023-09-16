import * as React from "react";
import Typography from "./typography";
import RatingStars from "./star";

type cardProps = {
  id: string;
  name: string;
  description: string;
  city: string;
  rating: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function Card({
  id,
  name,
  description,
  city,
  rating,
}: cardProps) {
  return (
    <div className="h-fit  w-full border border-gray-100 shadow-sm rounded-sm overflow-hidden">
      <img src="/" className="h-36 w-full bg-gray-100 text-[5px]" alt={id} />
      <div className="flex flex-col p-2 gap-1">
        <RatingStars rating={rating} />
        <Typography variant="p">{name}</Typography>
        <Typography variant="small">{city}</Typography>
        <Typography variant="small">{description.substring(0, 20)}</Typography>
      </div>
    </div>
  );
}

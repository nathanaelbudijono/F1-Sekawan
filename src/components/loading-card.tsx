import Skeleton from "./skeleton";

export default function LoadingCard() {
  return (
    <div className="h-fit  w-full border border-gray-100 shadow-sm rounded-sm overflow-hidden">
      <Skeleton className="h-36 w-full " />
      <div className="flex flex-col p-2 gap-1">
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-6 w-ful" />
      </div>
    </div>
  );
}

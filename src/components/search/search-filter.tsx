import clsx from "clsx";
import * as React from "react";
import { Restaurant } from "../../lib/slice/restaurant-slice";

export default function SearchFilter({
  restaurants,
  selected,
  setFiltered,
}: {
  restaurants: Restaurant[];
  selected: string;
  setFiltered: React.Dispatch<React.SetStateAction<Restaurant[]>>;
}) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const filterTimeout = setTimeout(() => {
      setFiltered(() => {
        let filtered = restaurants.filter(
          (post) =>
            post.name.toLowerCase().includes(value.toLowerCase()) ||
            post.description.toLowerCase().includes(value.toLowerCase()) ||
            post.city.toLowerCase().includes(value.toLowerCase())
        );
        filtered =
          selected === "Sort by rating"
            ? filtered.sort((a, z) => {
                if (typeof a.id === "number" && typeof z.id === "number") {
                  return +z.id - a.id;
                } else {
                  return 0;
                }
              })
            : filtered.sort((a, z) => a.name.localeCompare(z.name));
        return filtered;
      });
    }, 100);

    return () => clearTimeout(filterTimeout);
  }, [restaurants, setFiltered, value, selected]);

  return (
    <div className="mb-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a keyword."
        className={clsx(
          "pl-3 py-1.5 rounded-md w-full shadown-sm text-sm",
          "transition-colors duration-200 bg-transparent",
          "border border-primary-400 text-typography-100",
          "active:text-typography-100",
          "dark:border-tertiary-300 dark:text-typography-800 dark:active:border-quaternary-500"
        )}
      />
    </div>
  );
}

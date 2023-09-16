import * as React from "react";
import { useAppStore } from "./store";

export default function useRestaurant() {
  const { getRestaurant, restaurants } = useAppStore();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await getRestaurant();
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchData();
  });

  return { restaurants, isLoading };
}

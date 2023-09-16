import * as React from "react";
import { useAppStore } from "./store";
export default function useRestaurant() {
  const { getRestaurant, restaurants } = useAppStore();
  React.useEffect(() => {
    getRestaurant();
  }, []);

  return restaurants;
}

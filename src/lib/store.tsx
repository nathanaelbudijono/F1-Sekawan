import { create } from "zustand";
import { RestaurantSlice, RestaurantState } from "./slice/restaurant-slice";

type storeState = RestaurantState;

export const useAppStore = create<storeState>()((...a) => ({
  ...RestaurantSlice(...a),
}));

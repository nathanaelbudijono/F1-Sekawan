import { StateCreator } from "zustand";
import axios from "axios";

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: string;
}

export interface RestaurantState {
  restaurants: Restaurant[];
  getRestaurant: () => void;
}

export const RestaurantSlice: StateCreator<RestaurantState> = (set, get) => ({
  restaurants: [],
  getRestaurant: async () => {
    try {
      const res = await axios.get("https://restaurant-api.dicoding.dev/list");
      set({ restaurants: res.data.restaurants });
    } catch (err) {
      console.log(err);
    }
  },
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  ids: string[];
};

const initialState: FavoritesState = {
  ids: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.ids.indexOf(action.payload);

      if (index === -1) {
        state.ids.push(action.payload);
      } else {
        state.ids.splice(index, 1);
      }
    },
  },
  selectors: {
    selectFavoriteIds: (state) => state.ids,
    selectIsFavorite: (state, mealId: string) => state.ids.includes(mealId),
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const { selectFavoriteIds, selectIsFavorite } = favoritesSlice.selectors;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface FavoriateState {
  ids: string[];
}

const initialState: FavoriateState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoriteMealIds = (state: RootState) => state.favoriteMeals.ids;
export default favoritesSlice.reducer;

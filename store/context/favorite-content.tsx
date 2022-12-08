import { createContext, ReactNode, useState, useMemo } from 'react';

interface FavoriteContextInterface {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoriteContextInterface | null>(
  null
);

export interface FavoritesContextProviderProps {
  children: ReactNode;
}

function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id: string) {
    setFavoriteIds((currentFatIds) =>
      currentFatIds.filter((mealId: string) => mealId !== id)
    );
  }

  const value = useMemo(() => {
    return {
      ids: favoriteIds,
      addFavorite,
      removeFavorite,
    };
  }, [favoriteIds]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;

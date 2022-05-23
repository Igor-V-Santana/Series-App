import { useContext, createContext, useState } from "react";

type ChildrenType<T = {}> = T & { children?: React.ReactNode }

type FavoritesContextType = {
  favorites: any
  setFavorites: (array: any) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: () => {},
});

export const FavoritesProvider = ({ children }: ChildrenType) => {
  const [favorites, setFavorites] = useState([]);
    
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);

  if (ctx === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return ctx;
};
import { useContext, createContext, useState } from "react";

type ChildrenType<T = {}> = T & { children?: React.ReactNode }

type SearchContextType = {
  search: string;
  setSearch: (string: string) => void;
};

const SearchContext = createContext<SearchContextType>({
  search: '',
  setSearch: () => {},
});

export const SearchProvider = ({ children }: ChildrenType) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);

  if (ctx === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return ctx;
};
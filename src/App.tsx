import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./hooks/useFavorites";
import { SearchProvider } from "./hooks/useSearch";
import { MainRoutes } from "./Routes";


function App() {
  return (
    <FavoritesProvider>
      <SearchProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </SearchProvider>
    </FavoritesProvider>
  );
}

export default App;

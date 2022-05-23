import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from "./context/SearchContext";
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

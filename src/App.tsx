import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./hooks/useFavorites";
import { ModalProvider } from "./hooks/useModal";
import { SearchProvider } from "./hooks/useSearch";
import { MainRoutes } from "./Routes";


function App() {
  return (
    <FavoritesProvider>
          <ModalProvider>
      <SearchProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </SearchProvider>
    </ModalProvider>
    </FavoritesProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { SeriePage } from "./pages/SeriePage";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<SeriePage />}></Route>
      <Route path="/search/:name" element={<SearchPage />}></Route>
      <Route path="/favoritos" element={<FavoritesPage />}></Route>
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { SeriePage } from "./pages/SeriePage";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/:id" element={<SeriePage />}></Route>
      <Route path="/search/:name" element={<SearchPage />}></Route>
    </Routes>
  );
};

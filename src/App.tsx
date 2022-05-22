import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { MainRoutes } from "./Routes";


function App() {
  return (
      <SearchProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </SearchProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./hooks/useModal";
import { SearchProvider } from "./hooks/useSearch";
import { MainRoutes } from "./Routes";


function App() {
  return (
    <ModalProvider>
      <SearchProvider>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </SearchProvider>
    </ModalProvider>
  );
}

export default App;

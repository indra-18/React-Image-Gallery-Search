import AppRouter from "./Routers/AppRouter";
import { ImageContextProvider } from "./components/contexts/api-context";
function App() {
  return (
    <div >
      <ImageContextProvider>
        <AppRouter />
      </ImageContextProvider>

    </div>
  );
}

export default App;

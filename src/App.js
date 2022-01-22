import { Route, Routes } from "react-router-dom";

import { FavoriteContextProvider } from "./contexts/FavoriteContext";
import MainLayout from "./components/layouts/MainLayout";
import AllLocations from "./pages/AllLocations";
import NewLocation from "./pages/NewLocation";
import Favorites from "./pages/Favorites";
import styles from "./App.module.css";

const App = () => {
  return (
    <FavoriteContextProvider>
      <MainLayout>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<AllLocations />} />
            <Route path="new-location" element={<NewLocation />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </div>
      </MainLayout>
    </FavoriteContextProvider>
  );
};

export default App;

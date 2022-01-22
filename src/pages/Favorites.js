import { useContext } from "react";
import LocList from "../components/locations/LocList";
import FavoriteContext from "../contexts/FavoriteContext";

import styles from "./Favorites.module.css";

const Favorites = () => {
  const favCtx = useContext(FavoriteContext);
  const totalFav = favCtx.totalFavorites;
  const favs = favCtx.favorites;
  let content = <h4>You have no favorites yet 🙁</h4>;
  return (
    <section className={styles.container}>
      <h1>My Favorites</h1>
      {totalFav === 0 ? content : (content = <LocList data={favs} />)}
    </section>
  );
};

export default Favorites;

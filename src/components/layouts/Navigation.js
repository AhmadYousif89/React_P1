import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../contexts/FavoriteContext";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const favCtx = useContext(FavoriteContext);
  const totalFavs = favCtx.totalFavorites;
  return (
    <header className={styles.nav}>
      <div className={`${styles.container} ${styles.flex}`}>
        <p className={styles.logo}>React Project</p>
        <nav>
          <ul className={`${styles.nav_items} ${styles.flex}`}>
            <li>
              <Link className={styles.nav_link} to="/">
                All Locations
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} to="new-location">
                New Loaction
              </Link>
            </li>
            <li>
              <Link
                className={`${styles.nav_link} ${styles.last}`}
                to="favorites">
                Favorites
              </Link>
            </li>
            <span
              className={styles.tf}
              style={totalFavs <= 0 ? { display: "none" } : null}>
              {totalFavs}
            </span>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

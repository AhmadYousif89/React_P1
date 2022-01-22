import { useContext, useState } from "react";

import Card from "../models/Card";
import styles from "./LocDetails.module.css";
import FavoriteContext from "../../contexts/FavoriteContext";

const LocDetails = (props) => {
  const favCtx = useContext(FavoriteContext);
  const locIsFav = favCtx.locIsFav(props.id);
  const [showInfo, setShowInfo] = useState(false);

  const handleFavImgStatus = () => {
    if (!locIsFav) {
      favCtx.addToFav({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
      setShowInfo("Added to Favorites");
      setTimeout(() => {
        setShowInfo("");
      }, 2000);
    } else {
      favCtx.removeFromFav(props.id);
    }
  };
  return (
    <Card>
      <li className={styles.item}>
        <img src={props.image} alt={props.title} className={styles.image} />
        <div className={styles.content}>
          <h1>{props.title}</h1>
          <h2>{props.address}</h2>
          <p>{props.description}</p>
        </div>
        <p className={styles.text_like}>{locIsFav ? "" : "Like It ?"}</p>
        <div>
          <img
            onClick={handleFavImgStatus}
            src={locIsFav ? "images/heart-red.svg" : "images/heart.svg"}
            alt="heart"
          />
        </div>
        <p
          className={styles.info}
          style={showInfo ? { display: "block" } : { display: "none" }}>
          {showInfo}
        </p>
      </li>
    </Card>
  );
};

export default LocDetails;

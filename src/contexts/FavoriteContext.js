import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // for auto compilation.
  addToFav: () => {},
  removeFromFav: () => {},
  locIsFav: () => {},
});

export default FavoriteContext;

export const FavoriteContextProvider = (props) => {
  const [favorites, setFavoritesState] = useState([]);

  const handleAddToFav = (location) => {
    setFavoritesState((prevFavState) => {
      //  adds the selected loc to user-favorites.
      return prevFavState.concat(location);
    });
  };
  const handleRemoveFromFav = (location) => {
    setFavoritesState((prevFavState) => {
      //  if true then (remove the selected loc from user-favs) if location id matchs a location present in the favorites page.
      return prevFavState.filter((loc) => loc.id !== location);
    });
  };
  // check if one or more location is part of our favorites.
  const handleLocationIsFav = (location) => {
    //  if true and some locations matchs the given id in our favorites then will do something with it later.
    return favorites.some((loc) => loc.id === location);
  };

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addToFav: handleAddToFav,
    removeFromFav: handleRemoveFromFav,
    locIsFav: handleLocationIsFav,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

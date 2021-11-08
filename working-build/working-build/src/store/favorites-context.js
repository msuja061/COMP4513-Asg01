import { Children, createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: (favoriteClicked) => {},
  deleteFavorite: (playId) => {},
  playIsFavorite: (playId) => {},
});

export function FavoritesContextProvider(props) {
  const [favoritesList, setFavoritesList] = useState([]);

  function addFavoriteHandler(favoriteClicked) {
    setFavoritesList((prevFavoritesList) => {
      return prevFavoritesList.concat(favoriteClicked);
    });
  }

  function deleteFavoriteHandler(playId) {
    setFavoritesList((prevFavoritesList) => {
      return prevFavoritesList.filter((p) => p.id !== playId);
    });
  }

  function playIsFavoritesHandler(playId) {
    //Helper function, may not need it
    return favoritesList.some((p) => p.id === playId);
  }

  const context = {
    favorites: favoritesList,
    addFavorite: addFavoriteHandler,
    deleteFavorite: deleteFavoriteHandler,
    playIsFavorite: playIsFavoritesHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

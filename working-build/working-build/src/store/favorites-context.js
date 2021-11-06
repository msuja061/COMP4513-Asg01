import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addFavoriteHandler: (favoriteClicked) => {},
  deleteFavoriteHandler: (playId) => {},
  playIsFavoritesHandler  : (playId) => {}
});

export function FavoritesContextProvider(props) {
  const [favoritesList, setFavoritesList] = useState([]);

  function addFavoriteHandler(favoriteClicked) {
    setFavoritesList(prevFavoritesList => {
      return prevFavoritesList.concat(favoriteClicked);
    });
  }

  function deleteFavoriteHandler(playId) {
    setFavoritesList(prevFavoritesList => {
      return prevFavoritesList.filter(play => play.id !== playId);
    })
  }

  function playIsFavoritesHandler(playId) { //Helper function, may not need it
    return favoritesList.some(play => play.id === playId);
  }

  function blank() {
    
  }
  
  const context = {
    favorites: favoritesList,
    addFavoriteHandler: addFavoriteHandler,
    deleteFavoriteHandler: deleteFavoriteHandler,
    playIsFavoritesHandler: playIsFavoritesHandler
  };

  return <FavoritesContext.Provider value={context}>
    {props.childern}
  </FavoritesContext.Provider>
}

export default FavoritesContext;
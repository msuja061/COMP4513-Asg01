import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function ListOfPlays(props) {
  const favContext = useContext(FavoritesContext);
  const playIsFav = favContext.playIsFavorite(props.aPlay.id);

  function toggleFavoriteStatus() {
    if (playIsFav) {
      favContext.deleteFavorite(props.aPlay.id);
    } else {
      favContext.addFavorite(props.aPlay);
    }
  }

  return (
    <li>
      <h2>Title: {props.aPlay.title}</h2>
      <div>Released: {props.aPlay.likelyDate}</div>
      <div>Genre: {props.aPlay.genre}</div>
      <button onClick={toggleFavoriteStatus}>
        {playIsFav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button>View</button>
    </li>
  );
}
export default ListOfPlays;

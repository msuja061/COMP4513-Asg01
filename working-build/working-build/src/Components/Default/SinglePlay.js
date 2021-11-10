import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PlayDetailsMain from "../Details/PlayDetailsMain";

const SinglePlay = (props) => {
  const [viewDetails, setviewDetails] = React.useState(false);
  const [viewSingle, setViewSingle] = React.useState(true);
  const favContext = useContext(FavoritesContext);
  const playIsFav = favContext.playIsFavorite(props.single.id);

  // Add/Remove plays to favourites list
  function toggleFavoriteStatus() {
    if (playIsFav) {
      favContext.deleteFavorite(props.single.id);
    } else {
      favContext.addFavorite(props.single);
    }
  }

  // 
  function handleViewClick(event) {
    setViewSingle(false);
    setviewDetails(true);
  }

  return (
    <div>
      <h2>Title: {props.single.title}</h2>
      <div>Released: {props.single.likelyDate}</div>
      <div>Genre: {props.single.genre}</div>
      <button onClick={toggleFavoriteStatus}>
        {playIsFav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={handleViewClick}>View</button>
      {viewDetails ? <PlayDetailsMain thePlay={props.single} /> : null}
    </div>
  );
};
export default SinglePlay;

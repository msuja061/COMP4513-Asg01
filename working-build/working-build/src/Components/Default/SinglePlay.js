import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import PlayDetailsMain from "../Details/PlayDetailsMain";

/**
* Toggles favourites, add item to favourites list
*/
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
    <div className="column is-full">
      <div className="card has-shadow" style={{ margin: "20%" }}>
        <header className="card-header">
          <p className="card-header-title is-centered title is-6">
            {props.single.title}
          </p>
        </header>
        <div className="card-content">
          <p className="subtitle is-6">Released: {props.single.likelyDate}</p>
          <p className="subtitle is-6">Genre: {props.single.genre}</p>
        </div>
        <footer className="card-footer">
          <button
            className="button card-footer-item is-link"
            onClick={toggleFavoriteStatus}
          >
            {playIsFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>

          <button
            className=" button card-footer-item is-link"
            onClick={handleViewClick}
          >
            View
          </button>
        </footer>

        {viewDetails ? <PlayDetailsMain thePlay={props.single} /> : null}
      </div>
    </div>
  );
};
export default SinglePlay;

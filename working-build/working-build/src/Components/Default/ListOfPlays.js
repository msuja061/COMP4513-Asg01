import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import PlayDetailsMain from "../Details/PlayDetailsMain";

/**
* Favourites handler; adds/removes favourites indicator to item
* Expands View Information for item
*/
const ListOfPlays = (props) => {
  const [viewDetails, setviewDetails] = React.useState(false);

  const favContext = useContext(FavoritesContext);
  const playIsFav = favContext.playIsFavorite(props.aPlay.id);

  function toggleFavoriteStatus() {
    if (playIsFav) {
      favContext.deleteFavorite(props.aPlay.id);
    } else {
      favContext.addFavorite(props.aPlay);
    }
  }
  let playClicked = "";

  function handleViewClick(event) {
    setviewDetails(true);

    playClicked = props.aPlay;
    props.showDetail(props.aPlay);
    // <PlayDetailsMain thePlay={playClicked} />;
  }
  console.log(playClicked);
  if (props.fav === true) {
    return (
      <div className="column is-full">
        <div className="card is-primary" style={{ margin: "50px 30px" }}>
          <header className="card-header has-background-primary-light">
            <p className="card-header-title is-centered is-6">
              {props.aPlay.title}
            </p>
          </header>
          <div className="card-content">
            <p className="subtitle is-6">Released: {props.aPlay.likelyDate}</p>
            <p className="subtitle is-6">Genre: {props.aPlay.genre}</p>
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
        </div>
      </div>
    );
  } else {
    return (
      <div className="column is-one-third">
        <div className="card is-primary" style={{ margin: "50px 30px" }}>
          <header className="card-header has-background-warning">
            <p className="card-header-title is-centered title is-5">
              {props.aPlay.title}
            </p>
          </header>
          <div className="card-content">
            <p className="subtitle is-6">Released: {props.aPlay.likelyDate}</p>
            <p className="subtitle is-6">Genre: {props.aPlay.genre}</p>
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
        </div>
      </div>
    );
  }
};
export default ListOfPlays;

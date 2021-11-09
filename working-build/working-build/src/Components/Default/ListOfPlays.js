import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import PlayDetailsMain from "../Details/PlayDetailsMain";

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

  return (
    <li>
      <h2>Title: {props.aPlay.title}</h2>
      <div>Released: {props.aPlay.likelyDate}</div>
      <div>Genre: {props.aPlay.genre}</div>
      <button onClick={toggleFavoriteStatus}>
        {playIsFav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      
      <Link to="/details">
      <button onClick={handleViewClick}>View</button>
      </Link>


      {/* {viewDetails ? <PlayDetailsMain thePlay={props.aPlay} /> : null} */}
    </li>
  );
};
export default ListOfPlays;

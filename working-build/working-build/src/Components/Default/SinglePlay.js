import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function SinglePlay(props) {
  const favContext = useContext(FavoritesContext);
  const playIsFav = favContext.playIsFavorite(props.single.id);

  function toggleFavoriteStatus() {
    if (playIsFav) {
      favContext.deleteFavorite(props.single.id);
    } else {
      favContext.addFavorite(props.single);
    }
  }

  function viewHandler(event) {}

  return (
    <div>
      <h2>Title: {props.single.title}</h2>
      <div>Released: {props.single.likelyDate}</div>
      <div>Genre: {props.single.genre}</div>
      <button onClick={toggleFavoriteStatus}>
        {playIsFav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={viewHandler}>View</button>
    </div>
  );
}
export default SinglePlay;

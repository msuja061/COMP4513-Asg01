import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import SortPlays from "./SortPlays";
import ListOfPlays from "./ListOfPlays";

function DefaultView(props) {
  const favContext = useContext(FavoritesContext);
  const playIsFav = favContext.playIsFavorite(props.plays.id);

  function toggleFavoriteStatus(event) {
    console.log(event);
    if (playIsFav) {
      favContext.deleteFavorite(props.plays.id);
    } else {
      favContext.addFavorite(props.plays.id);
    }
  }
  return (
    <div>
      <SortPlays />

      <button>Title</button>
      <button>Year</button>
      <ul>
        {props.plays.map((plays) => {
          return <ListOfPlays aPlay={plays} key={plays.id} />;
        })}
      </ul>
    </div>
  );
}
export default DefaultView;

import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ListOfPlays from "./Default/ListOfPlays";

function FavoritesBar() {
  const favContext = useContext(FavoritesContext);

  let content;
  if (favContext.favorites.length < 1) {
    content = <p>You Favorite List is Empty. Not a Shakes fan, eh?</p>;
  } else {
    content = favContext.favorites.map((plays) => {
      return <ListOfPlays aPlay={plays} key={plays.id} />;
    });
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesBar;

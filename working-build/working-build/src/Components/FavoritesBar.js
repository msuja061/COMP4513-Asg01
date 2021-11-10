import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ListOfPlays from "./Default/ListOfPlays";

function FavoritesBar() {
  const favContext = useContext(FavoritesContext);

  let content;
  if (favContext.favorites.length < 1) {
    content = (
      <p
        className="has-text-weight-bold"
        style={{ color: "black", marginLeft: "5%" }}
      >
        Favorite List is Empty. Not a Shakes fan, eh?
      </p>
    );
  } else {
    content = favContext.favorites.map((plays) => {
      return <ListOfPlays aPlay={plays} key={plays.id} fav={true} />;
    });
  }

  return (
    <section className="columns is-multiline">
      <p
        className="title column is-full"
        style={{ color: "black", marginLeft: "5%" }}
      >
        My Favorites
      </p>
      {content}
    </section>
  );
}
export default FavoritesBar;

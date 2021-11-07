import React from "react";
import SortPlays from "./SortPlays";

function DefaultView(props) {

  return (
    <div>
      <SortPlays />
      <button>Title</button>
      <button>Year</button>
      <ul>
        {props.plays.map((plays) => {
          return (
            <li>
              <h2>Title: {plays.title}</h2>
              <div>Released: {plays.likelyDate}</div>
              <div>Genre: {plays.genre}</div>
              <button>Add to Favorites</button>
              <button>View</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DefaultView;

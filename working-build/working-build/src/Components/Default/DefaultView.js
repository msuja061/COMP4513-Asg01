import React from "react";
import SortPlays from "./SortPlays";
function DefaultView(props) {
  let listedItem = props.plays;

  return (
    <div>
      <SortPlays plays={props.plays}/>
      <ul>
        {listedItem.map((plays) => {
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
import React from "react";

function DefaultView(props) {
  return (
    <div>
      <h1>Default View</h1>
      <h2>{props.title}</h2>
      <ul>
        {props.plays.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DefaultView;

import React from "react";
import PlayDetails from "./PlayDetails";
import PlayCharacters from "./PlayCharacters";
import PlayText from "./PlayText";
import "./playText.css";

const PlayDetailsMain = (props) => {
  //Testing vars. Change when view play is set up
  console.log(props.thePlay);
  const testPlays = JSON.parse(localStorage.getItem("plays"));
  const testPlay = props.thePlay;
  let playDetails;
  const localPlaysDetails = [JSON.parse(localStorage.getItem("playsDetails"))];

  if (localPlaysDetails.some((play) => play.title === testPlay.title)) {
    //Checks if play's details are already in local storage
    console.log("Already in local storage!");
    playDetails = localPlaysDetails.find(
      (play) => play.title === testPlay.title
    );
    console.log(playDetails);
  } else if (testPlay.filename !== "") {
    //If not checks if the play does have additional details
    fetch(
      "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" +
        testPlay.id
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let testResult = JSON.stringify(result);
          localStorage.setItem("playsDetails", testResult);
        },
        (error) => {
          alert("Error fetching data");
        }
      );
  } else {
    console.log("Play does not contain characters and text!"); //Add error handler for clickign characters or text!!!!!!
  }

  const [detailsToShow, setDetailsToShow] = React.useState("details");

  const whatToRender = () => {
    if (detailsToShow === "characters") {
      return playDetails.persona.map((p) => (
        <PlayCharacters player={p.player} />
      ));
    } else if (detailsToShow === "text") {
      return playDetails.acts.map((p) => <PlayText play={p} />);
    } else {
      return <PlayDetails play={testPlay}></PlayDetails>;
    }
  };

  return (
    <div>
      <div>
        <h1>{testPlay.title}</h1>
        <h2>{testPlay.synopsis}</h2>
      </div>
      <div>
        <button onClick={() => setDetailsToShow("details")}>Details</button>
        <button onClick={() => setDetailsToShow("characters")}>
          Characters
        </button>
        <button onClick={() => setDetailsToShow("text")}>Text</button>
        <div>{whatToRender()}</div>
      </div>
    </div>
  );
};

export default PlayDetailsMain;

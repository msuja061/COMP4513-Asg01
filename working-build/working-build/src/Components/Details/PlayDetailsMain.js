import React, { useEffect } from "react";
import PlayDetails from "./PlayDetails";
import PlayCharacters from "./PlayCharacters";
import PlayText from "./PlayText";
import "./playText.css";
import TextFilter from "./TextFilter";

/**
* Details source page, everything detail is printed here
*/
const PlayDetailsMain = (props) => {
  //Testing vars. Change when view play is set up
  console.log("Play passed into detail!");
  console.log(props.playClicked);
  // let playDetails;
  // let localPlaysDetails = [JSON.parse(localStorage.getItem("playsDetails"))];
  const [playDetails, setPlayDetails] = React.useState(null);

useEffect(() => {
    let localPlaysDetails;

    if (localStorage.getItem("playsDetails") !== null) {
      localPlaysDetails = [JSON.parse(localStorage.getItem("playsDetails"))];
    }
    
    if (props.playClicked.filename !== "") {
      //If not checks if the play does have additional details
      fetch(
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + props.playClicked.id
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log (result);
            localStorage.setItem("playsDetails", JSON.stringify(result));
            setPlayDetails(result);
          },
          (error) => {
            alert("Error fetching data");
          }
        );
    } else if (localPlaysDetails.some((play) => play.id === props.playClicked.id)) {
    //Checks if play's details are already in local storage
    console.log("Already in local storage!");
    setPlayDetails(localPlaysDetails.some((play) => play.id === props.playClicked.id));
  } else {
    console.log("Play does not contain characters and text!"); //Add error handler for clickign characters or text!!!!!!
  }

  }, [])
  
  useEffect(() => {
    
  }, [playDetails])

  const [detailsToShow, setDetailsToShow] = React.useState("details");

  const whatToRender = () => {
    if (detailsToShow === "characters") {
      return playDetails.persona.map((p) => (
        <PlayCharacters player={p.player} />
      ));
    } else if (detailsToShow === "text") {
      return playDetails.acts.map((p) => <PlayText play={p} />);
    } else {
      return <PlayDetails play={props.playClicked}></PlayDetails>;
    }
  };

  return (
    <div>
      <aside>
        <h1>{props.playClicked.title}</h1>
        { detailsToShow !== "text" ? <h2>{props.playClicked.synopsis}</h2> : null}
        { detailsToShow === "text" ? <TextFilter play={playDetails} /> : null}
      </aside>
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

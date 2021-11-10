// import { render } from "react-dom";

/**
* Details information page generator
*/
const PlayDetails = (props) => {
  return (
    <div>
      <p>{props.play.likelyDate}</p>
      <p>{props.play.genre}</p>
      <p>{props.play.wiki}</p>
      <p>{props.play.gutenberg}</p>
      <p>{props.play.shakespeareOrg}</p>
      <p>{props.play.desc}</p>
    </div>
  );
}

export default PlayDetails;

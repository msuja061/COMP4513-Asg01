// import { render } from "react-dom";
import './playText.css';

const PlayText = (props) => {

  const scene = (s) => {
    return (
      // <span>
      //   <h5>{s.name}: {s.title}</h5>
      //   <h5>{s.stageDirection}</h5>
      //   <span>{s.speeches.map( (speech) => speeches(speech) )}</span>
      // </span>

        <div id="sceneHere">
          <h4>{s.name}</h4>
          <p class="title">{s.title}</p>
          <p class="direction">{s.stageDirection}</p>
          {s.speeches.map( (speech) => speeches(speech) )}
        </div>
    )
  }

  const speeches = (speech) => {
    return (
      <div class="speech">
        <span>{speech.speaker}</span>
        {speech.lines.map( (line) => lines(line) )}
      </div>
    )
  }

  const lines = (line) => {
    return (
      <p>{line}</p>
    );
  }

  return (
      <article id="actHere">
        <h3>{ props.play.name }</h3>
        {props.play.scenes.map( (s) => scene(s) )}
      </article>
  );
}

export default PlayText;
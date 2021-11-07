// import { render } from "react-dom";

const PlayText = (props) => {

  const scene = (s) => {
    return (
      <span>
        <h5>{s.name}: {s.title}</h5>
        <h5>{s.stageDirection}</h5>
        <span>{s.speeches.map( (speech) => speeches(speech) )}</span>
      </span>
    )
  }

  const speeches = (speech) => {
    return (
      <span>
        <p>{speech.speaker}: </p>
        <p>{speech.lines.map( (line) => lines(line) )}</p>
      </span>
    )
  }

  const lines = (line) => {
    return (
      <p>{line}</p>
    );
  }

  return (
    <div>
      <h3>{ props.play.name }</h3>
      <h4>{props.play.scenes.map( (s) => scene(s) )}</h4>
    </div>
  );
}

export default PlayText;
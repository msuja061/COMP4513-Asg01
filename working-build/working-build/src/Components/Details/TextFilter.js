import React from "react";
import TextFilterScenes from "./TextFilterScenes";

const TextFilter = (props) => {
  let act;

  const handleSelection = (name) => {
    act = props.play.acts.find((a) => a.name === name);
  }

  return (
    <div>
      <fieldset id="interface">
        <select id="actList">
          {props.play.acts.map((p) => <option onChange={handleSelection(p.name)} value={p.name} >{p.name}</option>)}
        </select>
          <TextFilterScenes act={act}></TextFilterScenes>
      </fieldset>
    </div>
  );
}

export default TextFilter;
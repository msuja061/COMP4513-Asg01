import React from "react";

/**
* Prints out individual Shakespeare scenes
*/
const TextFilterScenes = (props) => {

  return (
    <select id="sceneList">
        {props.act.scenes.map((s) => <option value={s.name} >{s.name}</option>)}
    </select>
  )

}

export default TextFilterScenes;

import React from "react";

const PlaySwitchBoard = (props) => {

  return (
    <select id="sceneList">
        {props.act.scenes.map((s) => <option value={s.name} >{s.name}</option>)}
    </select>
  )

}

export default PlaySwitchBoard;
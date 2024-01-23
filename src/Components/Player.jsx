import { useState } from "react";

export default function Player({initialName, symbol}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);

    function hanldeEditClick(){
        setEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange}/ >;
    }

    return (
        <li>
            <span className="player">
              {editablePlayerName} 
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={hanldeEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}
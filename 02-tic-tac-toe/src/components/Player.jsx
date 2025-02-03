import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); // it use toggle boolean value ture->false, false->true BUT if our state depends on our prvious state, we should not update the state like this. WHY? coz in this states updates are not performed instantly bt at some point in the future.
    //Insted, pass a fun to our state updating fun. This fun will automatically called by react and will receive the guaranted latest state value
    setIsEditing((wasEditing) => !wasEditing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  } // called two-way binding - coz we're getting a value out of this input and we're feeding a value back into this input

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

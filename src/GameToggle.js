import React from "react";

const GameToggle = ({ hide, toggleGames }) => (
  <button onClick={toggleGames}>
    {hide
      ? "Show the Number of Games Played"
      : "Hide the Number of Games Played"}
  </button>
);

export default GameToggle;

import React from "react";

import paper from "../static/images/icon-paper.svg";

const Paper = ({ handleClick }) => {
  function handleInnerClick(option) {
    // Esta función la uso para saber si el badge lo estoy usando en el tablero principal o en el tablero en el que mustra el resultado
    if (handleClick !== undefined) {
      handleClick(option);
    } else {
      return;
    }
  }

  return (
    <div
      onClick={() => handleInnerClick("paper")}
      className="Board-item option-paper"
    >
      <div className="item-container paper">
        <img src={paper} alt="Paper" />
      </div>
    </div>
  );
};

export default Paper;

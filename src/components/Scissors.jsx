import React from "react";

import scissors from "../static/images/icon-scissors.svg";

const Scissors = ({ handleClick }) => {
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
      onClick={() => handleInnerClick("scissors")}
      className="Board-item option-scissor"
    >
      <div className="item-container scissor">
        <img src={scissors} alt="Scissors" />
      </div>
    </div>
  );
};

export default Scissors;

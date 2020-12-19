import React from "react";

import rock from "../static/images/icon-rock.svg";

const Rock = ({ handleClick }) => {
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
      onClick={() => handleInnerClick("rock")}
      className="Board-item option-rock"
    >
      <div className="item-container rock">
        <img src={rock} alt="Rock" />
      </div>
    </div>
  );
};

export default Rock;

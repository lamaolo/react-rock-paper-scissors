import React, { useState } from "react";

import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";

import "../static/styles/Board.css";

const Board = ({ setUserPick, setIsPlaying }) => {
  function handleClick(option) {
    setUserPick(option);
    setIsPlaying(true);
  }

  return (
    <main className="Board">
      <Paper handleClick={handleClick} />

      <span className="line line1"></span>

      <Scissors handleClick={handleClick} />

      <span className="line line2"></span>

      <Rock handleClick={handleClick} />

      <span className="line line3"></span>
    </main>
  );
};

export default Board;

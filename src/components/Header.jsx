import React from "react";

import "../static/styles/Header.css";

const Header = ({ score }) => {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>
          Rock
          <br />
          Paper
          <br />
          Scissors
        </h1>
      </div>
      <div className="Header-score">
        <p>SCORE</p>
        <h2>{score}</h2>
      </div>
    </header>
  );
};

export default Header;

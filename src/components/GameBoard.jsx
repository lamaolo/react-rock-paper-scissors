import React, { useEffect, useState } from "react";

import Rock from "./Rock";
import Scissors from "./Scissors";
import Paper from "./Paper";
import getRandomNumber from "../lib/getRandomNumber";
import chooseWinner from "../lib/chooseWinner";

import "../static/styles/GameBoard.css";
import loadingGif from "../static/images/loading.gif";

const GameBoard = ({ userPick, addScore, setIsPlaying }) => {
  const [isThinking, setIsThinking] = useState(true);
  const [housePick, setHousePick] = useState("");
  const [winner, setWinner] = useState("");

  function chooseHousePick() {
    // devuelve un valor al azar entre 1 y 3
    const randomPick = getRandomNumber(1, 4);

    switch (randomPick) {
      case 1: {
        return "rock";
      }

      case 2: {
        return "paper";
      }

      case 3: {
        return "scissors";
      }

      default: {
        break;
      }
    }
  }

  function playAgain() {
    setIsPlaying(false);
  }

  useEffect(() => {
    setTimeout(() => {
      let pick = chooseHousePick();

      setHousePick(pick);
      setIsThinking(false);

      // win / lose / draw
      const result = chooseWinner(userPick, pick);
      setWinner(result);

      addScore(result);
    }, 2000);
  }, []);

  return (
    <div className="GameBoard">
      <div className="user-pick">
        <h2 className="pick-title">YOU PICKED</h2>

        {isThinking ? (
          <div className="user-pick-option">
            {userPick === "rock" && <Rock />}
            {userPick === "paper" && <Paper />}
            {userPick === "scissors" && <Scissors />}
          </div>
        ) : (
          <div className={winner + " user-pick-option"}>
            {userPick === "rock" && <Rock />}
            {userPick === "paper" && <Paper />}
            {userPick === "scissors" && <Scissors />}
          </div>
        )}
      </div>

      {!isThinking && (
        <div className="play-again">
          {winner !== "draw" && (
            <>{winner === "win" ? <h1>You win</h1> : <h1>You lose</h1>}</>
          )}

          {winner === "draw" && <h1>It's a draw</h1>}

          <div onClick={playAgain} className="play-again-button">
            <p>PLAY AGAIN</p>
          </div>
        </div>
      )}

      <div className="house-pick">
        <h2 className="pick-title">THE HOUSE PICKED</h2>
        {isThinking ? (
          <div className="house-pick-option glow">
            <img className="" src={loadingGif} alt="Thinking..." />
          </div>
        ) : (
          <div className="user-pick">
            {!(winner === "draw") ? (
              <div
                className={`${
                  winner === "win" ? "lose" : "win"
                } user-pick-option`}
              >
                {housePick === "rock" && <Rock />}
                {housePick === "paper" && <Paper />}
                {housePick === "scissors" && <Scissors />}
              </div>
            ) : (
              <div className="draw user-pick-option">
                {housePick === "rock" && <Rock />}
                {housePick === "paper" && <Paper />}
                {housePick === "scissors" && <Scissors />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;

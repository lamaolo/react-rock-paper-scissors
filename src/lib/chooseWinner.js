function chooseWinner(userPick, housePick) {
  if (userPick === "paper") {
    if (housePick === "paper") return "draw";
    if (housePick === "scissors") return "lose";
    if (housePick === "rock") return "win";
  } else if (userPick === "rock") {
    if (housePick === "paper") return "lose";
    if (housePick === "scissors") return "win";
    if (housePick === "rock") return "draw";
  } else {
    if (housePick === "paper") return "win";
    if (housePick === "scissors") return "draw";
    if (housePick === "rock") return "lose";
  }
}

export default chooseWinner;

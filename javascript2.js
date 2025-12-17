const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
  const input = prompt("Choose rock, paper, or scissors:");
  return input ? input.toLowerCase() : null;
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }

  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winningConditions[player] === computer
    ? "You win!"
    : "Computer wins!";
}

function playGame() {
  const playerChoice = getPlayerChoice();

  if (!choices.includes(playerChoice)) {
    console.log("Invalid choice. Please try again.");
    return;
  }

  const computerChoice = getComputerChoice();

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(playerChoice, computerChoice));
}

playGame();

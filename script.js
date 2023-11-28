function getComputerChoice () {
    const randomChoice = Math.floor(Math.random() * 3);

    switch (randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissors";
        default:
            return "unknown";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const winningCombinations = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (playerSelection === computerSelection) {
        return "It's a tie! " + playerSelection + " and " + computerSelection + " are the same."
    } 
    else if (winningCombinations[playerSelection] === computerSelection) {
        return "You win! "  + playerSelection + " beats " + computerSelection + "."
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + "."
    }

}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let round = 1; round <= 5; round++) {
//         const playerSelection = prompt("Round " + round + ": Rock, Paper, or Scissors?");
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection);

//         console.log(result);

//         if(result.includes("win")) {
//             playerScore++;
//         } else if (result.includes("lose")) {
//             computerScore++;
//         }

//     }

//     if (playerScore > computerScore) {
//         console.log("Congratulations! You win with a score of " + playerScore + "-" + computerScore + ".");
//     } else if (playerScore < computerScore) {
//         console.log("Game Over! You lose with a score of " + playerScore + "-" + computerScore + ".");
//     } else {
//         console.log("Its a tie with a score of " + playerScore + "-" + computerScore + ".")
//     }
// }

document.getElementById("rock").addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound("rock", computerChoice);
    updateResult(resultMessage);
});

document.getElementById("paper").addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound("paper", computerChoice);
    updateResult(resultMessage);
});
document.getElementById("scissors").addEventListener("scissors", function () {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound("scissors", computerChoice);
    updateResult(resultMessage);
});

function updateResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;

    const scoreElement = document.createElement("p");
    scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerChoice}`;
    resultElement.appendChild(scoreElement);

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player" : "Computer";
        resultElement.textContent = `${winner} wins the game!`;
        playerScore = 0;
        computerScore = 0;
    }
}


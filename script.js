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

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


function game () {

}
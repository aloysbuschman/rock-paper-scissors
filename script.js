const results = {
    win: "You win!",
    lose: "You lose",
    tie: "It is a tie"
}
const playerSelectedRock = {
    rock: results.tie,
    paper: results.lose,
    scissors: results.win
}

const playerSelectedPaper = {
    rock: results.win,
    paper: results.tie,
    scissors: results.lose
}

const playerSelectedScissors = {
    rock: results.lose,
    paper: results.win,
    scissors: results.tie
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const selectedOption = options[Math.floor(Math.random() * 3)]
    return selectedOption;
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    console.log({playerSelection}, {computerSelection})
    switch (playerSelection) {
        case "rock": 
            console.log(playerSelectedRock[computerSelection])
            break;
        case "paper": 
            console.log(playerSelectedPaper[computerSelection])
            break;
        case "scissors": 
            console.log(playerSelectedScissors[computerSelection])
            break;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
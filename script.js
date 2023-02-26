
// Set variables for the scores 
let playerScore = 0; 
let computerScore = 0; 

// Possible result outcomes based on the Player slection 
const results = {
    playerSelectedRock: {rock: 'tie', paper: 'lose', scissors: 'win'},
    playerSelectedPaper: {rock: 'win', paper: 'tie', scissors: 'lose'},
    playerSelectedScissors: {rock: 'lose', paper: 'win', scissors: 'tie'}
}


function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    const index = Math.floor(Math.random()*3)
    const computerChoice = options[index];
    return computerChoice;
}

// Increase score based on the result of playRound()
function setScore(result) {
    if (result === 'win') {
        playerScore ++
    } else if (result === 'lose') {
        computerScore ++
    }
}

function playRound(playerSelection, computerSelection) {
    let result = ''
    const roundMessages = {
        win: `You won this round ${playerSelection} beats ${computerSelection}!`,
        lose: `Too bad, you lost this round ${computerSelection} beats ${playerSelection}!`,
        tie: "This round was a tie."
    }

    switch (playerSelection) {
        case 'rock': 
            result = results.playerSelectedRock[computerSelection];
            setScore(result)
            console.log(roundMessages[result]);
            break;
        case 'paper': 
            result = results.playerSelectedPaper[computerSelection];
            setScore(result)
            console.log(roundMessages[result]);
            break;
        case 'scissors': 
            result = results.playerSelectedScissors[computerSelection];
            setScore(result)
            console.log(roundMessages[result]);
            break;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = window.prompt('Choose your weapon: rock, paper or scissors')
        playRound(playerSelection, computerSelection);
        console.log({playerScore},{computerScore});
    }
    getWinner();
}

function getWinner() {
    if (playerScore > computerScore) {
        console.log("YOU WON!");
    } else if (playerScore < computerScore) {
        console.log('LOSER!')
    } else {
        console.log('Play again, it was a tie...')
    }
}
game();


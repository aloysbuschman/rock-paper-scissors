let playerScore = 0; 
let computerScore = 0; 




function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const index = Math.floor(Math.random()*3)
    const computerChoice = options[index];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const roundMessages = {
        won: `You won this round! ${playerSelection} beats ${computerSelection}`,
        lost: "Too bad, you lost this round.",
        tie: "This round was a tie."
    }
    switch (playerSelection) {
        case 'Rock': 
            if (computerSelection === 'Rock') {
                console.log ('It was a tie!')
            } else if (computerSelection === 'Paper') {
                computerScore ++; 
                console.log('Too bad, you lose')
            } else {
                playerScore++; 
                console.log(roundMessages.won)
            }
            break;
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = 'Rock'
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
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const selectedOption = options[Math.floor(Math.random() * 3)]
    console.log(selectedOption);
}

getComputerChoice();
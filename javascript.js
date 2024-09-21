// Computer Choice *************

// Create array of three options
let computerChoice = [
    "rock",
    "paper",
    "scissors"
];

// Define function to randomly select one of these three from array position
function getComputerChoice() {
    computerSelection = computerChoice[Math.floor(Math.random() * (2 - 0 + 1))]
    return console.log("Computer Selection: " + computerSelection);
}
// Computer returns randomly rock, paper, or scissors
// Human choice ***************
let humanSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
function getHumanChoice() {
// Get player input
    // Validate user input
    while (['rock', 'paper', 'scissors'].indexOf(humanSelection.toLowerCase()) === -1) {
        humanSelection = prompt("Please Choose Rock, Paper, or Scissors").toLowerCase();
    }
    // Display valid user input
    return console.log("Your Selection: " + humanSelection);
}

getComputerChoice();
getHumanChoice();

// Players score variables ******
// Create variable to capture user score
let humanScore = 0;
// Create variable to capture computer score
let computerScore = 0;

// console.log(computerSelection);
// console.log(humanSelection);

// Play a single round **********
// Create function to play a single round
// Compare computer and human choice, determine winner
function determineWinner(computer, human) {
    if (computer.toLowerCase() === "rock" && human === "scissors") {
        return winner = computer
    } else if (computer.toLowerCase() === "paper" && human === "rock") {
        return winner = computer
    } else if (computer.toLowerCase() === "scissors" && human === "paper") {
        return winner = computer
    } else if (human === "rock" && computer.toLowerCase() === "scissors") {
        return winner = human
    } else if (human === "paper" && computer.toLowerCase() === "rock") {
        return winner = human
    } else if (human === "scissors" && computer.toLowerCase() === "paper") {
        return winner = human
    } else {
        return winner = 0;
    }
}
determineWinner(computerSelection, humanSelection);
console.log(winner);

// Display winner
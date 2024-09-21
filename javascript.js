// Computer Choice

// Create array of three options
const computerChoice = [
    "Rock",
    "Paper",
    "Scissors"
];

// Define function to randomly select one of these three from array position
function getComputerChoice() {
    return computerChoice[Math.floor(Math.random() * (2 - 0 + 1))];
}

// Computer returns randomly rock, paper, or scissors
console.log(getComputerChoice()); 



// Human choice

function getHumanChoice() {
// Get player input
    let humanChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    // Validate user input
    while (['rock', 'paper', 'scissors'].indexOf(humanChoice) === -1) {
        humanChoice = prompt("Please choose only Rock, Paper, or Scissors").toLowerCase();
    }
    // Display valid user input
    console.log(humanChoice);
}

console.log(getHumanChoice());

// Players score variables
// Create variable to capture user score
let humanScore = 0;
// Create variable to capture computer score
let computerScore = 0;

// Play a single round
// Create function to play a single round

function playRound(humanChoice, computerChoice) {

}

// Define human choice
// Define computer choice
// Compare the two choices and determine a winner
// Display the round winner
// Increment the score of the winner
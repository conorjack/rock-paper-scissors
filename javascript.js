console.log("Hello World!");

// Computer Choice

// Create array of three options
const computerChoice = [
    "Rock",
    "Paper",
    "Scissors"
];

// Define function to randomly select one of these three from array position
function getComputerChoice(min, max) {
    return computerChoice[Math.floor(Math.random() * (max - min + 1)) + min];
}

// Computer returns randomly rock, paper, or scissors
console.log(getComputerChoice(0,2)) 



// Human choice

// Get player input
let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();

// Validate user input
while (['rock', 'paper', 'scissors'].indexOf(userChoice) === -1) {
    userChoice = prompt("Please choose only Rock, Paper, or Scissors").toLowerCase();
}

// Display valid user input
console.log(userChoice);

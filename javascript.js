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

let getHumanChoice = prompt("Choose Rock, Paper, or Scissors");

function verifyInput(choice) {
    // If valid, display
    if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') {
        return console.log(choice);
    } else {
        // If not valid, have player re-enter until valid
        return prompt("Choose Rock, Paper, or Scissors");
    }
}

// verify and then display choice
verifyInput(getHumanChoice);


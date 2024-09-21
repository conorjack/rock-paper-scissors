// Computer Choice *************

// Create array of three options
const computerChoice = [
    "rock",
    "paper",
    "scissors"
];

// Define function to randomly select one of these three from array position
function getComputerChoice() {
    return console.log("Computer Selection: " + computerChoice[Math.floor(Math.random() * (2 - 0 + 1))]);
}
// Computer returns randomly rock, paper, or scissors
// Human choice ***************
function getHumanChoice() {
// Get player input
    let humanChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    // Validate user input
    while (['rock', 'paper', 'scissors'].indexOf(humanChoice.toLowerCase()) === -1) {
        humanChoice = prompt("Please Choose Rock, Paper, or Scissors").toLowerCase();
    }
    // Display valid user input
    return console.log("Your Selection: " + humanChoice);
}


// Players score variables ******
// Create variable to capture user score
let humanScore = 0;
// Create variable to capture computer score
let computerScore = 0;

// Play a single round **********
// Create function to play a single round

// Define human choice
let humanSelection = getHumanChoice();
// Define computer choice
let computerSelection = getComputerChoice();
// Compare the two choices

// function compareSelection(human, computer) {
// }
// // Determine the winner

// let winner = undefined;

// function checkWinner(computer, human) {
//     if (computer.toLowerCase() === "rock" && human === "scissors") {
//         return winner = computer
//     } else if (computer.toLowerCase() === "paper" && human === "rock") {
//         return winner = computer
//     } else if (computer.toLowerCase() === "scissors" && human === "paper") {
//         return winner = computer
//     } else if (human === "rock" && computer.toLowerCase() === "scissors") {
//         return winner = human
//     } else if (human === "paper" && computer.toLowerCase() === "rock") {
//         return winner = human
//     } else if (human === "scissors" && computer.toLowerCase() === "paper") {
//         return winner = human
//     } else {
//         return winner = 0;
//     }
// }

// checkWinner(computerSelection, humanSelection);

// console.log(winner);

// // // Display round winner message
// // if (winner = computer) {
// //     console.log("Sorry, ${computerSelection} beats ${humanSelection}!")
// // } else if (winner = human) {
// //     console.log("Congrats! ${humanSelection} beats ${computerSelection}!")
// // } else {
// //     console.log("Wow, it was a tie! You both selected ${humanSelection}.")
// // }

// // Increment the score of the winner
// humanScore++;
// computerScore++;

// function playRound(humanChoice, computerChoice) {
//     console.log(humanChoice);
//     console.log(computerChoice);
// }

// playRound(humanSelection, computerSelection);




// // Display the round winner
// // Increment the score of the winner
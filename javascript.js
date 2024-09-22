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

// Select how many rounds user wants to play

let rounds = " ";

function determineRounds() {
    rounds = parseInt(prompt("How many rounds would you like to play?"));
}

let humanSelection = " ";
function getHumanChoice() {
// Get player input
    // Validate user input
    while (['rock', 'paper', 'scissors'].indexOf(humanSelection.toLowerCase()) === -1) {
        humanSelection = prompt("Please Choose Rock, Paper, or Scissors").toLowerCase();
    }
    // Display valid user input
    return console.log("Your Selection: " + humanSelection);
}


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
    if (computer === "rock" && human === "scissors") {
        return winner = "computer"
    } else if (computer === "paper" && human === "rock") {
        return winner = "computer"
    } else if (computer === "scissors" && human === "paper") {
        return winner = "computer"
    } else if (human === "rock" && computer === "scissors") {
        return winner = "human"
    } else if (human === "paper" && computer === "rock") {
        return winner = "human"
    } else if (human === "scissors" && computer === "paper") {
        return winner = "human"
    } else {
        return winner = "neither";
    }
}

// Determine and increment score
function playRound() {
    if (winner === "computer") {
        console.log("Sorry, the computer won. Better luck next round...")
        return computerScore++;
    } else if (winner === "neither") {
       console.log("Wow, looks like you tied this round!")
    } else if (winner === "human") {
        console.log("Congrats, you won this round!")
        return humanScore++;
    } 
}


// Announce winner and ask if user wants to play
let playAgain = " ";

function announceWinner() {
    // Initial playAgain prompt
    if (computerScore > humanScore) {
        while (['yes', 'no'].indexOf(playAgain.toLowerCase()) === -1) {
            return playAgain = prompt("Sorry, you lost this match. Would you like to play again?").toLowerCase();
        }
    } else {
        while (['yes', 'no'].indexOf(playAgain.toLowerCase()) === -1) {
            return playAgain = prompt("Congrats!! You won this match. Would you like to play again?").toLowerCase()
        }
    }
}

function keepPlaying() {
    if (playAgain === "yes") {
        humanScore = 0;
        computerScore = 0;
        console.log("Awesome! Let's play again. Starting over with a fresh score.");
        playAgain = " ";
        playGame();
    } else {
        playAgain = " ";
        console.log("Thanks for playing! See you again soon!")
    }
}

// Play a 5 round game
function playGame() {
    determineRounds();
    while (humanScore <= rounds / 2 && computerScore <= rounds / 2) {
        humanSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
        getComputerChoice();
        getHumanChoice();
        determineWinner(computerSelection, humanSelection);
        playRound();
        // Display current score
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    announceWinner();
    keepPlaying();
}

playGame();

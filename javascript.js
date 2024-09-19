console.log("Hello World!");

// Computer Choice
// Create array of three options
const option = [
    "Rock",
    "Paper",
    "Scissors"
];

// Define function to randomly select one of these three from array position
function getComputerChoice(min, max) {
    return option[Math.floor(Math.random() * (max - min + 1)) + min];
}
// Computer returns randomly rock, paper, or scissors

console.log(getComputerChoice(0,2))

// 

// Human choice
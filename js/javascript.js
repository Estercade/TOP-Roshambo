// Roshambo External JS file

// Initialize array of possible hands
const hand = ['Rock', 'Paper', 'Scissors'];

// Get random hand
function getComputerChoice() {
    let computerSelection = hand[Math.floor(Math.random() * 3)];
}

// Prompt user for hand
function getUserChoice() {
    let userSelection = prompt("What shape would you like to throw?")
}

// Compare computer's hand to user's hand
// Roshambo External JS file

// Initialize array of possible hands
const hand = ['rock', 'paper', 'scissors'];

// Get random hand for the computer
function getComputerChoice() {
    let computerSelection = hand[Math.floor(Math.random() * 3)];
}

// Prompt user for their hand
function getUserChoice() {
    let userSelection = prompt("What shape would you like to throw?")
    userSelection = userSelection.toLowerCase();
}

// Simulate a round of rock paper scissors

    // Prompt user for their hand
    // Get random hand for the computer
    // Compare user's hand versus the computer's
        // If hands are the same
        // Say it is a draw
        // Else if the user's hand is rock
            // If the computer's hand is paper
                // Tell the user "You Lose! Paper beats Rock"
            // Else if the computer's hand is scissors
                // Tell the user "You Win! Rock beats Scissors"
        // Else if the user's hand is paper
            // If the computer's hand is scissors
                // Tell the user "You Lose! Scissors beats Paper"
            // Else if the computer's hand is rock
                // Tell the user "You Win! Paper beats Rock"
        // Else if the user's hand is scissors
            // If the computer's hand is rock
                // Tell the user "You Lose! Rock beats Scissors"
            // Else if the computer's hand is paper
                // Tell the user "You Win! Scissors beats Paper"
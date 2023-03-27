// Roshambo External JS file

// Initialize array of possible hands
const hand = ['rock', 'paper', 'scissors'];

// Get random hand for the computer
function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

// Prompt user for their hand
function getUserChoice() {
    let playerSelection = prompt("What shape would you like to throw?")
    playerSelection = playerSelection.toLowerCase();
}

// Initialize result message
let result;

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Simulate a round of rock paper scissors
// Compare user's hand versus the computer's
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // If hands are the same
        return result = "draw"
        // Say it is a draw
    // Else if the user's hand is rock
    } else if (playerSelection === 'rock') {
        // If the computer's hand is paper
        if (computerSelection === 'paper') {
            // Tell the user "You Lose! Paper beats Rock"
            return result = "You Lose! Paper beats Rock";
        // Else if the computer's hand is scissors
        } else if (computerSelection === 'scissors') {
            // Tell the user "You Win! Rock beats Scissors"
            return result = "You Win! Rock beats Scissors";}
    // Else if the user's hand is paper
    } else if (playerSelection === 'paper') {
        // If the computer's hand is scissors
        if (computerSelection === 'scissors') {
            // Tell the user "You Lose! Scissors beats Paper"
            return result = "You Lose! Scissors beats Paper";
        // Else if the computer's hand is rock
        } else if (computerSelection === 'rock') {
            // Tell the user "You Win! Paper beats Rock"
            return result = "You Win! Paper beats Rock";}
    // Else if the user's hand is scissors
    } else if (playerSelection === 'scissors') {
        // If the computer's hand is rock
        if (computerSelection === 'rock') {
            // Tell the user "You Lose! Rock beats Scissors"
            return result = "You Lose! Rock beats Scissors";
        // Else if the computer's hand is paper
        } else if (computerSelection === 'paper') {
            // Tell the user "You Win! Scissors beats Paper"
            return result = "You Win! Scissors beats Paper";}
        }
}
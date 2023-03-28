// Roshambo External JS file

// Initialize array of possible hands
const hand = ['rock', 'paper', 'scissors'];

// Get random hand for the computer
function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

let playerSelection;
// Prompt user for their hand
function getUserChoice() {
    return prompt("What shape would you like to throw?")
}

// Initialize result message
let result;

// Simulate a round of rock paper scissors
// Compare user's hand versus the computer's
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    // If hands are the same
        return result = "It's a draw, try again!"
        // Result is a draw
    // Else if the user's hand is rock
    } else if (playerSelection === 'rock') {
        // If the computer's hand is paper
        if (computerSelection === 'paper') {
            // Tell the user "You Lose! Paper beats Rock"
            return result = "You Lose! Paper beats Rock";
        // Else if the computer's hand is scissors
        } else if (computerSelection === 'scissors') {
            // Tell the user "You Win! Rock beats Scissors"
            score += +1;
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
            score += +1;
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
            score += +1;
            return result = "You Win! Scissors beats Paper";}
        }
}

// Initialize number of rounds
let n = 5;
// Initialize score counter
let score = 0;

function game() {
    for (i = 0; i < n; i++) {
        console.log(`Round ${i + 1}`)
        playerSelection = getUserChoice();
        // Convert player selection to lowercase
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (playerSelection === computerSelection) {
            i--;
        }
        console.log(result);
    }
    console.log(`You won ${score} out of 5 rounds!`)
}
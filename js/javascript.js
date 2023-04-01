// Roshambo External JS file

// Initialize array of possible hands
const hand = ['rock', 'paper', 'scissors'];

// Get random hand for the computer
function getComputerChoice() {
    return hand[Math.floor(Math.random() * 3)];
}

// Initalize player hand
let playerSelection;

// Initialize result message
let result;
// Initialize score counter
let scoreCounter = 0;
// Initalize round counter
let roundCounter = 0;
// Initalize scoreboard
let gameResult = 0;

// Simulate a round of rock paper scissors
// Compare user's hand versus the computer's
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
    // If hands are the same
        return result = "It's a draw, try again!"
        // Result is a draw
    } else {
        roundCounter++;
    }
    // Else if the user's hand is rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return result = "You Lose! Paper beats Rock";
        } else if (computerSelection === 'scissors') {
            scoreCounter++;
            return result = "You Win! Rock beats Scissors";}
    // Else if the user's hand is paper
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return result = "You Lose! Scissors beats Paper";
        } else if (computerSelection === 'rock') {
            scoreCounter++;
            return result = "You Win! Paper beats Rock";}
    // Else if the user's hand is scissors
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return result = "You Lose! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            scoreCounter++;
            return result = "You Win! Scissors beats Paper";}
        }
}

const playRock = document.getElementById('playRock');
const playPaper = document.getElementById('playPaper');
const playScissors = document.getElementById('playScissors');

playRock.addEventListener('click', () => {
    playerSelection = `rock`;
    playRound(playerSelection);
    updateResults();
})

playPaper.addEventListener('click', () => {
    playerSelection = `paper`;
    playRound(playerSelection);
    updateResults();
})

playScissors.addEventListener('click', () => {
    playerSelection = `scissors`;
    playRound(playerSelection);
    updateResults();
})

const roundResult = document.getElementById('roundResult');
const scoreboard = document.getElementById('scoreboard')

function updateResults() {
    roundResult.textContent = result;
    if (roundCounter < 5) {
        scoreboard.textContent = `You have won ${scoreCounter} out of ${roundCounter} rounds!`;
    } else if (roundCounter === 5 && scoreCounter < 3) {
        scoreboard.textContent = `You have won ${scoreCounter} out of ${roundCounter} rounds! The computer has won!`;
    } else if (roundCounter === 5 && scoreCounter >= 3) {
        scoreboard.textContent = `You have won ${scoreCounter} out of ${roundCounter} rounds! You have won!`;
    }
    if (roundCounter >= 5) {
        resetScore();
    }
}

function resetScore() {
    roundCounter = 0;
    scoreCounter = 0;
}
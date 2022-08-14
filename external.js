function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    let random = items[Math.floor(Math.random() * items.length)];
    return random;
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        return `You win! Score: ${playerScore}:${computerScore}`;
    }else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}. Score: ${playerScore}:${computerScore}`;
    }else if(playerSelection == computerSelection) {
        return `Draw! Score: ${playerScore}:${computerScore}`;
    }
}
function game() {
    for(i = 0; i < 5; i++) {
        let playerSelectionCase = prompt("rock, paper or scissors?");
        let playerSelection = playerSelectionCase.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();
function overGame() {
    if(playerScore > computerScore) {
    return "You won!"
    }else if(computerScore > playerScore) {
    return "You lost!"
    }else return "Draw!"
}
console.log(`${overGame()} Final score: ${playerScore}:${computerScore}`);
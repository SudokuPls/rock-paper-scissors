let playerScore="0";
let computerScore="0";
function getComputerChoice() {
    const randomChoice=["rock","paper","scissors"];
    return randomChoice[Math.floor(Math.random()*randomChoice.length)];
    }
function playRound() {
        let computerSelection=getComputerChoice();
        let playerSelection = prompt("Enter Rock, Paper, or Scissor").toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Draw! Computer also chose "+playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Win! Rock beats scissors!";
    } else if (playerSelection ==="rock" && computerSelection === "paper") {
        computerScore++;
        return "Loss! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Win! Rock beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerScore++;
        return "Loss! Scissor beats paper!";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore++;
        return "Win! Scissor beats paper!";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerScore++;
        return "Loss! Rock beats scissor!"
    }
}

function gameOver() {
    if (playerScore > computerScore) {
        console.log("Game Over! You have won!");
        console.log("Your score is " +playerScore);
        console.log("Computer score is "+computerScore);
    } else if (computerScore > playerScore) {
        console.log("Game Over! You have lost!");
        console.log("Your score is " +playerScore);
        console.log("Computer score is "+computerScore);
    }
}

function game() {
    console.log(playRound());
    if (playerScore < 5 && computerScore < 5) {
        game();
    } else {
        gameOver();
    }
}
game();
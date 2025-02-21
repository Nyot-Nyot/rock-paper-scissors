let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice(event) {
    const card = event.target.closest(".card");
    return card ? card.getAttribute("data-choice") : null;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    }

    computerScore++;
    return "You lose!";
}

function updateScoreDisplay() {
    const scoreDisplay = document.querySelector(".score");
    scoreDisplay.textContent = `Score: ${humanScore}/5`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreDisplay();
}

function playGame(event) {
    const playerChoice = getPlayerChoice(event);
    if (!playerChoice) return;

    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    alert(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);
    
    updateScoreDisplay();

    if (humanScore >= 5 || computerScore >= 5) {
        const finalResult = humanScore >= 5 ? "Congratulations! You win!" : "Sorry! You lose!";
        alert(finalResult);
        resetGame();
    }
}

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", playGame));

const newGameButton = document.querySelector("button");
newGameButton.addEventListener("click", resetGame);
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

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let playerScore = 0;
let totalGames = 0;

document.getElementById("choices").addEventListener("click", function(event) {
    if (event.target.closest(".card")) {
        let playerChoice = event.target.closest(".card").getAttribute("data-choice");
        let computerChoice = getComputerChoice();
        let result = determineWinner(playerChoice, computerChoice);

        alert(`You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`);

        if (result == "You win!") {
            playerScore++;
        }
        totalGames++;

        document.querySelector(".score").textContent = `Score: ${playerScore}/${totalGames}`;
    }
});
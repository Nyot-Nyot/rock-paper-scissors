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
    // do something
}

document.getElementById("choices").addEventListener("click", function(event) {
    if (event.target.closest(".card")) {
        let playerChoice = event.target.closest(".card").getAttribute("data-choice");
        let computerChoice = getComputerChoice();
        determineWinner(playerChoice, computerChoice);
    }
});
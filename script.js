function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumainChoice() {
    let input = prompt("Please select:\n1 - Rock\n2 - Paper\n3 - Scissors");
    switch (input) {
        case "1":
            return "rock";
        case "2":
            return "paper";
        case "3":
            return "scissors";
        default:
            alert("Invalid selection. Please enter 1, 2, or 3.");
            return getHumainChoice(); // Ask again
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === "paper" && computerChoice === "rocks") ||
        (playerChoice === "rocks" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // Player wins
        if (playerChoice === "paper") {
            console.log("You WIN! Paper beats Rocks");
            return 1
        } else if (playerChoice === "rocks") {
            console.log("You WIN! Rocks beats Scissors");
            return 1
        } else {
            console.log("You WIN! Scissors beats Paper");
            return 1
        }
    } else {
        // Player loses
        if (computerChoice === "paper" && playerChoice === "rocks") {
            console.log("You lose! Paper beats Rocks");
            return -1
        } else if (computerChoice === "rocks" && playerChoice === "scissors") {
            console.log("You lose! Rocks beats Scissors");
            return -1
        } else {
            console.log("You lose! Scissors beats Paper");
            return -1
        }
    }
}

function playGame(nb_rounds) {
    // Number of wins needed: e.g. Best of 5 -> first to 3
    const wins_needed = Math.ceil(nb_rounds / 2);
    let playerWins = 0;
    let computerWins = 0;
    let round = 1;

    while (playerWins < wins_needed && computerWins < wins_needed) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumainChoice();

        const result = playRound(humanChoice, computerChoice);
        // Assume playRound returns 1 if player wins, -1 if computer wins, 0 for tie
        if (result === 1) {
            playerWins++;
            console.log(`You win round ${round}! Score: ${playerWins} - ${computerWins}`);
        } else if (result === -1) {
            computerWins++;
            console.log(`Computer wins round ${round}! Score: ${playerWins} - ${computerWins}`);
        } else {
            console.log(`Round ${round} was a tie! Score: ${playerWins} - ${computerWins}`);
        }
        round++;
    }

    if (playerWins > computerWins) {
        console.log(`You win the Best of ${nb_rounds} series! Final score: ${playerWins} - ${computerWins}`);
    } else {
        console.log(`Computer wins the Best of ${nb_rounds} series! Final score: ${playerWins} - ${computerWins}`);
    }
}
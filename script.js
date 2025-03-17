function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber % 3 == 0) {
        return "rock";
    }
    if (randomNumber % 3 == 1) {
        return "paper";
    }
    if (randomNumber % 3 == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Type rock, paper or scissors.");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice);
    humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log("Tie! Both players have drawn!");
        return (1);
    }

    if (humanChoice == "scissors" && computerChoice == "rock" ||
        humanChoice == "rock" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "scissors"

    ) {
        console.log("You lose! " + humanChoice + " beats " + computerChoice + ".");
        return (2);
    }

    if (humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "rock" && computerChoice == "scissors"

    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        return (3);
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = 0;

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);

        if (result == 2) {
            humanScore++;
        }
        if (result == 3) {
            computerScore++;
        }

    }

    console.log("You: ", humanScore, "vs. Computer: ", computerScore);

}

playGame();




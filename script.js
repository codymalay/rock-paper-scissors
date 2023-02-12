// randomly generate 1 of 3 options for computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = convertChoice(computerChoice);
    return computerChoice;
}
// helper function to convert choice into a string
function convertChoice(computerChoice) {
    if (computerChoice == 0) {
        computerChoice = "Rock";
    } else (computerChoice <= 1 ? computerChoice = "Paper" : computerChoice = "Scissors")
    return computerChoice;
}
// gets player choice and checks validity
function getPlayerChoice() {
    let playerChoice = prompt("What is your choice?");
    let firstLetter = playerChoice.charAt(0);
    if (firstLetter == "r" || firstLetter == "R") {
        playerChoice = "Rock";
    } else if (firstLetter == "p" || firstLetter == "P") {
        playerChoice = "Paper";
    } else if (firstLetter == "s" || firstLetter == "S") {
        playerChoice = "Scissors";
    }
    if (checkAnswer(playerChoice)) {
        return playerChoice;
    } else {
        playerChoice = getPlayerChoice();
    }
    return playerChoice;
}
// helper function to make sure player answer is valid
function checkAnswer(playerChoice) {
    if (playerChoice == "Rock" ||  playerChoice =="Paper" || playerChoice == "Scissors") {
        return true;
    } else {
        alert("Please enter a valid option");
        return false;
    }
}
// a function call that compares player choice vs cpu choice and outputs a string based on the winner of the game
function playRound(playerChoice, computerChoice) {
    let result;
    if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            alert("Paper beats Rock, you lose!");
        } else if (computerChoice == "Rock") {
            alert("It's a tie! Try again.");
        } else if (computerChoice == "Scissors") {
            alert("Rock beats Scissors. You win!")
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Paper") {
            alert("It's a tie! Try again.");
        } else if (computerChoice == "Rock") {
            alert("Paper Beats Rock. You win!");
        } else if (computerChoice == "Scissors") {
            alert("Scissors beats Paper.  You lose!")
        }
    } else if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            alert("Scissors beats Paper. You win!");
        } else if (computerChoice == "Rock") {
            alert("Rock beats paper. You lose!");
        } else if (computerChoice == "Scissors") {
            alert("It's a tie! Try again.")
        }
    }
}
// a game will consist of 5 rounds, winner is the first to win 3 rounds
function game() {
    // 
}
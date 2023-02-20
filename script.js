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
    let result = 0;
    if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            alert("Paper beats Rock, you lose!");
            result--;
        } else if (computerChoice == "Rock") {
            alert("It's a tie! Try again.");
        } else if (computerChoice == "Scissors") {
            alert("Rock beats Scissors. You win!")
            result++;
        }
    } else if (playerChoice == "Paper") {
        if (computerChoice == "Paper") {
            alert("It's a tie! Try again.");
        } else if (computerChoice == "Rock") {
            alert("Paper Beats Rock. You win!");
            result++;
        } else if (computerChoice == "Scissors") {
            alert("Scissors beats Paper.  You lose!")
            result--;
        }
    } else if (playerChoice == "Scissors") {
        if (computerChoice == "Paper") {
            alert("Scissors beats Paper. You win!");
            result++;
        } else if (computerChoice == "Rock") {
            alert("Rock beats paper. You lose!");
            result--;
        } else if (computerChoice == "Scissors") {
            alert("It's a tie! Try again.")
        }
    }
    return result;
}
// a game will consist of 5 rounds, the player who has won the most rounds wins the game
function game() {
    let playerW = 0;
    let computerW = 0;
    for (let i=0; i<5; i++) {
        result = playRound(getPlayerChoice(), getComputerChoice());
        if (result == 1) {
            playerW++;
        } else if (result == -1) {
            computerW++;
        }
        if (playerW == 3 || computerW == 3) {
            i = 5;
        }
    }
    if (playerW > computerW) {
        alert("Congratulations, you beat the computer!")
    } else if (computerW > playerW) {
        alert("Sorry, the computer beat you this time.")
    } else {
        alert("This game ended in a tie. Try again!")
    }
}

/*
TO DOs
- remove logic that plays 5 rounds

- add event listener that iterates through buttons and calls playRound, assigning button
value to playerSelection

- create scoreboard that displays running score, announces winner (first to 5 points)
*/

game();
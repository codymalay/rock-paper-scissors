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
    console.log(playerChoice);
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
    // use a for loop to condition results for each player choice? Switch case? TBD

}
// a game will consist of 5 rounds, winner is the first to win 3 rounds
function game() {
    // 
}
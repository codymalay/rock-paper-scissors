function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        choice = "Rock";
    } else (choice <= 1 ? choice = "Paper" : choice = "Scissors")
    return choice;
}
// a function call that compares player choice vs cpu choice and outputs a string based on the winner of the game
function playRound(playerChoice, computerChoice) {
    // use a for loop to condition results for each player choice? Switch case? TBD
}
// a game will consist of 5 rounds, winner is the first to win 3 rounds
function game() {
    // 
}
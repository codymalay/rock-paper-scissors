function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        choice = "Rock";
    } else (choice <= 1 ? choice = "Paper" : choice = "Scissors")
    return choice;
}
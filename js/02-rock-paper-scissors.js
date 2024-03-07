function getPlayerChoice() {
    let input = window.prompt("Enter a number to indicate your choice.\n1 = ROCK, 2 = PAPER, 3 = SCISSORS");
    if(null === input) return false;
    input = parseInt(input);
    while(isNaN(input) || input < 1 || input > 3) {
        input = window.prompt("Invalid input. Entry must either be a '1' indicating ROCK, '2' indicating PAPER, or '3' indicating SCISSORS.");
    }
    // 0 = rock, 1 = paper, 2 = scissors
    return input - 1; 
}
function choiceToSTR(x) {
    switch(x) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
    return false;
}
function getCPUChoice() {
    // return 0;
    return Math.floor(Math.random() * 3);
}
// rock beats scissors, paper beats rock, scissors beats paper
function beatsWhom(x) {
    return ([2, 0, 1])[x];
}

// alert(choiceToSTR(beatsWhom(getPlayerChoice())));

function playGame() {
    let playerChoice, cpuChoice, tieStreak = 0;
    do {
        if(tieStreak) {
            alert('Tie Game! Try again.\nTie Streak: ' + tieStreak);
        }
        tieStreak++;

        cpuChoice = getCPUChoice();
        playerChoice = getPlayerChoice();
        if(false === playerChoice) return false;

        console.log("Player Choice:", choiceToSTR(playerChoice));
        console.log("Computer Choice:", choiceToSTR(cpuChoice));
    } while(playerChoice == cpuChoice)
    if(beatsWhom(playerChoice) == cpuChoice) {
        alert(`You defeated ${choiceToSTR(cpuChoice)} with ${choiceToSTR(playerChoice)}! Congratulations!`);
    } else {
        alert(`CPU defeated ${choiceToSTR(playerChoice)} with ${choiceToSTR(cpuChoice)}. Too bad!`);
    }
    return true;
}
// let result = playGame();
if(playGame()) {
    document.write("Thanks for playing! Reload to play again.");
} else {
    document.write("Reload the page to play Rock, Paper, Scissors!");
}

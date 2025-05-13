let humanScore = 0;
let compScore = 0;

function getCompChoice () {
    let n = Math.floor(Math.random() * 3)
        if (n === 1) {
        return ("rock");
    }   else if (n === 2) {
        return ("paper");
    }   else {
        return ("scissors");
    }
}

function getHumanChoice() {


}



function playRound(humanChoice, compChoice) {
    
    if (humanChoice.toLowerCase() === "rock" && compChoice === "paper") {
        console.log("You lost! Paper beats rock.")
}   else if (humanChoice.toLowerCase() === "rock" && compChoice === "scissors") {
        console.log("Congrats, you won!")
        humanScore++ 
}   else if (humanChoice.toLowerCase() === "paper" && compChoice === "rock") {
        console.log("Congrats, you won!")
        humanScore++ 
}   else if (humanChoice.toLowerCase() === "paper" && compChoice === "scissors") {
        console.log("You lost! Scissors beats paper.")
        compScore++ 
}   else if (humanChoice.toLowerCase() === "scissors" && compChoice === "paper") {
        console.log("Congrats, you won!")
        humanScore++
}   else if (humanChoice.toLowerCase() === "scissors" && compChoice === "rock") {
        console.log("You lost! Rock beats scissors.")
        compScore++
}   else if (humanChoice.toLowerCase() === compChoice) {
        console.log("It's a tie!")
}
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const computer = getCompChoice();

rockButton.addEventListener("click", function() {
    playRound("rock", computer);
});
paperButton.addEventListener("click", function() {
    playRound("paper", computer);
});
scissorsButton.addEventListener("click", function() {
    playRound("scissors", computer);
});


// function playGame() {
//         for (let i = 0; i<5; i++) {
//             const computer = getCompChoice();
//             const human = getHumanChoice();
//             playRound(computer, human);
//         }
//         if (humanScore > compScore) {
//             console.log("You won the game!");
//         } else if (humanScore < compScore) {
//             console.log("You lost the game!");
//         } else {
//             console.log("The game is a draw!");
//         }
//         console.log("Your score: " + humanScore + ". Comuters score: " + compScore + ".");
//     }

//  playGame();
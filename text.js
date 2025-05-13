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


const roundsTitle = document.querySelector(".rounds-title");
const roundsPara = document.querySelector(".rounds-para");

function playRound(humanChoice, compChoice) {
    
    if (humanChoice.toLowerCase() === "rock" && compChoice === "paper") {
        roundsTitle.textContent = ("You lost!");
        roundsPara.textContent = ("Paper beats rock.");
        compScore++
}   else if (humanChoice.toLowerCase() === "rock" && compChoice === "scissors") {
        roundsTitle.textContent = ("You won!");
        roundsPara.textContent = ("Rock beats scissors.");
        humanScore++ 
}   else if (humanChoice.toLowerCase() === "paper" && compChoice === "rock") {
        roundsTitle.textContent = ("You won!");
        roundsPara.textContent = ("Paper beats rock.")
        humanScore++ 
}   else if (humanChoice.toLowerCase() === "paper" && compChoice === "scissors") {
        roundsTitle.textContent = ("You lost!");
        roundsPara.textContent = ("Scissors beats paper.");
        compScore++ 
}   else if (humanChoice.toLowerCase() === "scissors" && compChoice === "paper") {
        roundsTitle.textContent = ("You won!");
        roundsPara.textContent = ("Scissors beats paper.");
        humanScore++
}   else if (humanChoice.toLowerCase() === "scissors" && compChoice === "rock") {
        roundsTitle.textContent = ("You lost!");
        roundsPara.textContent = ("Rock beats scissors.")
        compScore++
}   else if (humanChoice.toLowerCase() === compChoice) {
        roundsTitle.textContent = ("It's a tie!");
        roundsPara.textContent = (" ");
}
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const player1Pic = document.querySelector(".choice1");
const player2Pic = document.querySelector(".choice2");

rockButton.addEventListener("click", function() {
    const computer = getCompChoice();
    playRound("rock", computer);
    player1Pic.src = "./images/rock.png";
    player2Pic.src = "./images/" + computer + ".png";
});
paperButton.addEventListener("click", function() {
    const computer = getCompChoice();
    playRound("paper", computer);
    player1Pic.src = "./images/paper.png";
    player2Pic.src = "./images/" + computer + ".png";
});
scissorsButton.addEventListener("click", function() {
    const computer = getCompChoice();
    playRound("scissors", computer);
    player1Pic.src = "./images/scissors.png";
    player2Pic.src = "./images/" + computer + ".png";
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
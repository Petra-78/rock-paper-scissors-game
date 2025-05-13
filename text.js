let humanScore = 0;
let compScore = 0;

const humanSc = document.querySelector(".score-human");
const compSc = document.querySelector(".score-comp");

const roundsTitle = document.querySelector(".rounds-title");
const roundsPara = document.querySelector(".rounds-para");

const popup = document.querySelector(".popup");
const popupText = document.querySelector(".popup-text")

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

function playRound(humanChoice, compChoice) {

    if (humanScore === 5) {
        popupText.textContent = "You won the game!";
        popup.style.display = "flex";
}   else if (compScore === 5) {
        popupText.textContent = "You lost the game!";
        popup.style.display = "flex";
}
    
    else if (humanChoice.toLowerCase() === "rock" && compChoice === "paper") {
        roundsTitle.textContent = ("You lost!");
        roundsPara.textContent = ("Paper beats rock.");
        compSc.textContent = ("score: " + ++compScore);
}   else if (humanChoice.toLowerCase() === "rock" && compChoice === "scissors") {
        roundsTitle.textContent = ("You won!");
        roundsPara.textContent = ("Rock beats scissors.");
        humanSc.textContent = ("score: " + ++humanScore);
}   else if (humanChoice.toLowerCase() === "paper" && compChoice === "rock") {
        roundsTitle.textContent = ("You won!");
        roundsPara.textContent = ("Paper beats rock.");
        humanSc.textContent = ("score: " + ++humanScore);
}   else if (humanChoice.toLowerCase() === "paper" && compChoice === "scissors") {
        roundsTitle.textContent = ("You lost!");
        roundsPara.textContent = ("Scissors beats paper.");
        compSc.textContent = ("score: " + ++compScore);
}   else if (humanChoice.toLowerCase() === "scissors" && compChoice === "paper") {
        roundsTitle.textContent = ("You won!");
        roundsPara.textContent = ("Scissors beats paper.");
        humanSc.textContent = ("score :" + ++humanScore);
}   else if (humanChoice.toLowerCase() === "scissors" && compChoice === "rock") {
        roundsTitle.textContent = ("You lost!");
        roundsPara.textContent = ("Rock beats scissors.");
        compSc.textContent = ("score: " + ++compScore);
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


const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
    roundsTitle.textContent = "Choose your weapon!";
    roundsPara.textContent = "You have 5 rounds to win the game.";
    player1Pic.src = "./images/questionmark.png";
    player2Pic.src = "./images/questionmark.png";
    humanSc.textContent = "score: 0";
    compSc.textContent = "score: 0";
    humanScore = 0;
    compScore = 0;
})




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
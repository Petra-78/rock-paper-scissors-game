let humanScore = 0;
let compScore = 0;

function getCompRandom () {
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
    let guess = prompt("Write your guess");
    return guess;
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
  
  const humanSelection = getHumanChoice();
  const computerSelection = getCompRandom();
  
  playRound(humanSelection, computerSelection);
  
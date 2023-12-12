let Choices = ["ROCK", "PAPER", "SCISSORS"];

function cpuChoice () {
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    return Choices[x];
} 

// console.log(cpuChoice());

function playerChoice() {
    let x = prompt("Rock/Paper/Scissors: ");
    return x.toUpperCase();
}

// console.log(playerChoice());

function playRound(man, machine) {

    if (man === "ROCK" && machine === "PAPER") {
        return("You Lost! Try again")
    } else if (man === "ROCK" && machine === "SCISSORS"){
        return("You won! Machines have no chances!")
    } else if (man === "ROCK" && machine === "ROCK") {
        return("A classic Draw")
    } else if (man === "SCISSORS" && machine === "ROCK") {
        return("You Lost! Try again")
    } else if (man === "SCISSORS" && machine === "PAPER"){
        return("You won! Machines have no chances!")
    } else if (man === "SCISSORS" && machine === "SCISSORS") {
        return("A classic Draw")
    } else if (man === "PAPER" && machine === "SCISSORS") {
        return("You Lost! Try again")
    } else if (man === "PAPER" && machine === "ROCK"){
        return("You won! Machines have no chances!")
    } else if (man === "PAPER" && machine === "PAPER") {
        return("A classic Draw")
    } 

};


// console.log(playRound(playerChoice(), cpuChoice()));
let yourScore = 0;
let cpuScore = 0;

for (let i = 0; i < 7 ; i++) {
    x = playRound(playerChoice(), cpuChoice());
    if (x == "You won! Machines have no chances!") {
        yourScore ++;
        console.log(`You: ${yourScore}, CPU: ${cpuScore}`);
    } else if ( x == "You Lost! Try again") {
        cpuScore ++;
        console.log(`You: ${yourScore}, CPU: ${cpuScore}`);
    } else {
        console.log("Draw");
    }

}
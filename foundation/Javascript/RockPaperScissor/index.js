function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return 'rock';
    } else if(choice === 1){
        return 'paper';
    }else{
        return 'scissor';
    }
}

function getHumanChoice(){
    const choice = prompt("Enter your choice: ");
    choice.toLowerCase();
    if(choice === 'rock' || choice === 'paper' || choice === 'scissor'){
        return choice;
    }
    return 'Invalid choice';
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection,computerSelection){
    if(humanSelection === computerSelection){
        console.log("Tie");
    }else if(humanSelection === "rock" && computerSelection === "scissor"){
        console.log("You win! Rock beats Scissor");
        humanScore++;
    }else if(humanSelection === "paper" && computerSelection === "scissor"){
        console.log("You loose! Scissor beats Paper");
        computerScore++;
    }else if(humanSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }else if(humanSelection === "scissor" && computerSelection === "rock"){
        console.log("You loose! Rock beats Scissor");
        computerScore++;
    }else if(humanSelection === "scissor" && computerSelection === "paper"){
        console.log("You win! Scissor beats Paper");
        computerScore++;
    }else if(humanSelection === "rock" && computerSelection === "paper"){
        console.log("You loose! Paper beats Rock");
        humanScore++;
    }
}

function playGame(){
    
    while(humanScore < 5 && computerScore < 5){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(humanScore > computerScore){
        console.log("You win!");
    }else{
        console.log("You loose!");
    }
}

playGame();
function getComputerChoice(){
    //randomly selects RPS
    var random = (Math.floor(Math.random()*10)+1)%3;
    if(random===1){
        return 'Rock';
    }else if(random===2){
        return 'Paper';
    }else{
        return 'Scissors';
    }    
}

var compCounter = 0;
var playerCounter = 0;


function playGame(playerSelection, computerSelection){
    if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='paper'){
        compCounter++;
        return `You lose : Computer chose ${computerSelection}`;
    }    
    else if(playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='rock'){
        playerCounter++;
        return `You win : Computer chose ${computerSelection}`
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection.toLowerCase()==='scissors'){
        playerCounter++;
        return `You win : Computer chose ${computerSelection}`
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='rock'){
        compCounter++;
        return `You lose : chose ${computerSelection}`
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection.toLowerCase()==='scissors'){
        compCounter++;
        return `You lose : chose ${computerSelection}`;
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection.toLowerCase()==='paper'){
        playerCounter++;
        return `You win : chose ${computerSelection}`;
    }else{
        return `It's a draw, You chose ${playerSelection} and Computer chose ${computerSelection}`;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter your choice :");

function game(){
    //best of five
    let compScore = 0;
    let playerScore = 0;
    
}
console.log(playGame(playerSelection, computerSelection));
// console.log(game());
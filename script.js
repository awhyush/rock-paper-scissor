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
let compScore = 0;
let playerScore = 0;

function game() {
    // best of five
    while (compScore !== 5 && playerScore !== 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter your choice :");

        const result = playGame(playerSelection, computerSelection);
        console.log(result);
    }

    if (compScore === 5) {
        compScore = 0;
        playerScore = 0;
        console.log('You Lose');
        return 'You Lose';
    } else {
        compScore = 0;
        playerScore = 0;
        console.log('You Win');
        return 'You Win';
    }
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        compScore++;
        return `You lose : Computer chose ${computerSelection}`;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerScore++;
        return `You win : Computer chose ${computerSelection}`;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerScore++;
        return `You win : Computer chose ${computerSelection}`;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        compScore++;
        return `You lose : Computer chose ${computerSelection}`;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        compScore++;
        return `You lose : Computer chose ${computerSelection}`;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerScore++;
        return `You win : Computer chose ${computerSelection}`;
    } else {
        return `It's a draw, You chose ${playerSelection} and Computer chose ${computerSelection}`;
    }
}

game();
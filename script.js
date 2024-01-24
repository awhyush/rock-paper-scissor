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

const buttons = document.querySelectorAll('button');
const divs = document.querySelector('.result');

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
};

const resss = document.querySelector('.resss');
const choice = document.querySelector('.choice');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.className;
        const computerSelection = getComputerChoice();
        divs.textContent = playGame(playerSelection, computerSelection);
        resss.textContent = `Player Score : ${playerScore} | Computer Score : ${compScore}`
        choice.textContent = `You chose : ${playerSelection} | Computer chose : ${computerSelection}`;
        if(playerScore + compScore === 5 ){
            if(playerScore>compScore){
                divs.textContent = `Congrats you win.`
            }else{
                divs.textContent = 'Computer wins.'
            }
            playerScore = 0;
            compScore = 0;
        }
    });
});
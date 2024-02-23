let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
let result = '';

updateScoreElement();

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () =>{
        playGame('paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.body.addEventListener('keydown', (event) =>{
    if(event.key === "r"){
        playGame('rock');
    }else if(event.key === "p"){
        playGame('paper');
    }else if(event.key === "s"){
        playGame('scissors');
    }else if(event.key === "Backspace"){
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You won.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You won.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You won.';
        }
    }

    if (result === 'You won.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    
    document.querySelector('.js-result')
        .innerText = result;

    document.querySelector('.js-moves')
    .innerHTML = `You  <img src="Images/${playerMove}-image.png" class="moveIcon"> 
    <img src="Images/${computerMove}-image.png" class="moveIcon"> Computer`;

}

document.querySelector('.js-reset-button')
    .addEventListener('click', () =>{
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
    });

function updateScoreElement()
{
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}<br>
         Losses: ${score.losses}<br> 
         Ties: ${score.ties} `;

}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

const buttonEl = document.querySelector('.js-theme');
let element = document.body;

buttonEl.addEventListener('click', () =>{
    thm();
});

document.body.addEventListener('keydown', (event) =>{
    if(event.key === "d"){
        buttonEl.innerHTML = 'Light Theme';
        element.classList.add('darkTheme');
        element.classList.remove('lightTheme');

    }else if(event.key === "l"){
        buttonEl.innerHTML = 'Dark Theme';
        element.classList.add('lightTheme');
        element.classList.remove('darkTheme');

    }
});

function thm(){
        if(buttonEl.innerText === 'Dark Theme')
        {
            buttonEl.innerHTML = 'Light Theme';
            element.classList.add('darkTheme');
            element.classList.remove('lightTheme');

        }else
        {
            buttonEl.innerHTML = 'Dark Theme';
            element.classList.add('lightTheme');
            element.classList.remove('darkTheme');
        }

}
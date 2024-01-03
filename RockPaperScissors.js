let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
let result = '';

updateScoreElement();

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

function thm(){
    const buttonEl = document.querySelector('.js-theme');
    let element = document.body;
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
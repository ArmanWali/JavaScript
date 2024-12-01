function RandomNumber (){
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2/3){
        computerMove = 'Scissors';
    }

    return computerMove;
}


let score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, Losses: 0, Ties: 0 };


function PlayGame(playerMove){
    const computerMove = RandomNumber();
    let result = '';
    if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
            result = 'It\'s a Tie.';
            score.Ties += 1;
        }
        else if (computerMove === 'Paper'){
            result = 'You Lose.';
            score.Losses += 1;
        }
        else if (computerMove === 'Scissors'){
            result = 'You win.';
            score.Wins += 1;
        }
    }
    else if (playerMove === 'Paper'){
        if (computerMove === 'Rock'){
            result = 'You win.';
            score.Wins += 1;
        }
        else if (computerMove === 'Paper'){
            result = 'It\'s a Tie';
            score.Ties += 1;
        }
        else if (computerMove === 'Scissors'){
            result = 'You Lose.';
            score.Losses += 1;
        }
    }
    else if (playerMove === 'Scissors'){
        if (computerMove === 'Rock'){
            result = 'You Lose.';
            score.Losses += 1;
        }
        else if (computerMove === 'Paper'){
            result = 'You win.';
            score.Wins += 1;
        }
        else if (computerMove === 'Scissors'){
            result = 'It\'s a Tie.';
            score.Ties += 1;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));
    ScoreFunction();

    document.querySelector('.js-result')
        .innerHTML = `${result}`;

    document.querySelector('.js-moves')
        .innerHTML = `You choose ${playerMove}, computer choose ${computerMove}`;
        
}


function ScoreFunction(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}
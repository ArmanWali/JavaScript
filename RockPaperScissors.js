function RandomNumber (){
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2/3 && randomNumber <= 1){
        computerMove = 'Scissors';
    }

    return computerMove;
}

function PlayGame(playerMove){
    const computerMove = RandomNumber();
    let result = '';
    if (playerMove == 'Rock'){
        if (computerMove === 'Rock'){
            result = 'It\'s a Tie.';
        }
        else if (computerMove === 'Paper'){
            result = 'You Lose.';
        }
        else if (computerMove === 'Scissors'){
            result = 'You win.';
        }
    }
    else if (playerMove == 'Paper'){
        if (computerMove === 'Rock'){
            result = 'You win.';
        }
        else if (computerMove === 'Paper'){
            result = 'It\'s a Tie';
        }
        else if (computerMove === 'Scissors'){
            result = 'You Lose.';
        }
    }
    else if (playerMove == 'Scissors'){
        if (computerMove === 'Rock'){
            result = 'You Lose.';
        }
        else if (computerMove === 'Paper'){
            result = 'You win.';
        }
        else if (computerMove === 'Scissors'){
            result = 'It\'s a Tie.';
        }
    }

        alert(`You choose ${playerMove}, computer choose ${computerMove}, ${result}`);
}
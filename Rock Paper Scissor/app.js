let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const user = document.querySelector('#user-score');
const comp = document.querySelector('#comp-score');
const reset = document.querySelector('.reset-btn');

reset.addEventListener("click",()=>{
    user.innerText = "0";
    comp.innerText = "0";
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play your Move"
    msg.style.backgroundColor = "#081b31";
})

const genCompChoice = ()=>{             // generating Computer Choice
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw, Play again!";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice)=>{            // Predicting the Winner
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats comp ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }
    else{
        msg.innerText = `You Lost! Comp ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }
}

choices.forEach((choice)=>{         // Generating User Choice
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
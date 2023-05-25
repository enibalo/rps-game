
function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let index = Math.round(Math.random() * 2);
    return choices[index];
}

function getWinner(computer, player){
    let winner = "";
    player = player.toUpperCase();
    if (computer == player){
        winner =  "No one"
    }
    else if ( (computer+player).indexOf("PAPER")  != -1 && 
              (computer+player).indexOf("SCISSORS") != -1)
            {
        winner = (computer == "SCISSORS") ? "Computer": "Player";
    }
    else if ( (computer+player).indexOf("PAPER")  != -1 && 
              (computer+player).indexOf("ROCK") != -1)
        {
        winner = (computer == "PAPER") ?  "Computer": "Player";
    }
    else {
        //LAST OPTION: ROCK AND SCISSORS. Rock beats scissors.
        winner = (computer == "ROCK") ? "Computer": "Player";
    }

    return winner + " wins. Computer: "+ computer + " Player: " + player;
}

const player_rock = document.querySelector(".player.rock");
const results = document.querySelector(".results");
player_rock.addEventListener("click", function (){
    results.textContent = getWinner(getComputerChoice(), "rock")});


const player_paper = document.querySelector(".player.paper");
player_paper.addEventListener("click", function (){
        results.textContent = getWinner(getComputerChoice(), "paper")});

const player_scissors = document.querySelector(".player.scissors");
player_scissors.addEventListener("click", function (){
        results.textContent = getWinner(getComputerChoice(), "scissors")});
    





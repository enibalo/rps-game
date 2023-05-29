
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

    return winner;
}
//<a href="https://www.flaticon.com/free-icons/question-mark" title="question-mark icons">Question-mark icons created by Freepik - Flaticon</a>
function getComputerImage(computer){
    let answer = "";
    if (computer === "ROCK"){
        answer = "./img/rock.png"
    }
    else if (computer === "SCISSORS"){
        answer = "./img/scissors.png"
    }
   else{
       answer = "./img/paper.png" 
    }
    return answer;
}

const player_rock = document.querySelector(".player.rock");
const results = document.querySelector(".results");
const computer = document.querySelector("#weapon.computer");
const score_computer = document.querySelector("h2.computer");
const score_player = document.querySelector("h2.player");

player_rock.addEventListener("click", function (){
    let computer_choice = getComputerChoice();
    let winner = getWinner(computer_choice, "rock");

    if ( score_player.textContent.indexOf("W") === -1 &&
     score_computer.textContent.indexOf("W") === -1){
        if (winner === "Player"){
            if (score_player.textContent.substr(-1) === "4"){
                score_player.textContent = "PLAYER WINS! MATCH OVER."
            }else{score_player.textContent = "Player: " + 
            (Number(score_player.textContent.substr(-1)) + 1);}    
        }else if (winner === "Computer"){
            if (score_computer.textContent.substr(-1) === "4"){
                score_computer.textContent = "COMPUTER WINS! MATCH OVER."
            }else{score_computer.textContent = "Computer: " + 
            (Number(score_computer.textContent.substr(-1)) + 1);}    
        }
    }
    computer.src = getComputerImage(computer_choice);
    results.textContent = winner + " wins. Computer: "+ computer_choice;
});



const player_paper = document.querySelector(".player.paper");

player_paper.addEventListener("click", function (){
    let computer_choice = getComputerChoice();
    let winner = getWinner(computer_choice, "paper");

    if ( score_player.textContent.indexOf("W") === -1 
    && score_computer.textContent.indexOf("W") === -1){
        if (winner === "Player"){
            if (score_player.textContent.substr(-1) === "4"){
                score_player.textContent = "PLAYER WINS! MATCH OVER."
            }else{score_player.textContent = "Player: " + 
            (Number(score_player.textContent.substr(-1)) + 1);}    
        }else if (winner === "Computer"){
            if (score_computer.textContent.substr(-1) === "4"){
                score_computer.textContent = "COMPUTER WINS! MATCH OVER."
            }else{score_computer.textContent = "Computer: " + 
            (Number(score_computer.textContent.substr(-1)) + 1);}    
        }
    }
    computer.src = getComputerImage(computer_choice);
    results.textContent = winner + " wins. Computer: "+ computer_choice;
});

const player_scissors = document.querySelector(".player.scissors");

player_scissors.addEventListener("click", function (){
    let computer_choice = getComputerChoice();
    let winner = getWinner(computer_choice, "scissors");

    if ( score_player.textContent.indexOf("W") === -1 && 
        score_computer.textContent.indexOf("W") === -1){
        if (winner === "Player"){
            if (score_player.textContent.substr(-1) === "4"){
                score_player.textContent = "PLAYER WINS! MATCH OVER."
            }else{score_player.textContent = "Player: " + 
            (Number(score_player.textContent.substr(-1)) + 1);}    
        }else if (winner === "Computer"){
            if (score_computer.textContent.substr(-1) === "4"){
                score_computer.textContent = "COMPUTER WINS! MATCH OVER."
            }else{score_computer.textContent = "Computer: " + 
            (Number(score_computer.textContent.substr(-1)) + 1);}    
        }
    }
    computer.src = getComputerImage(computer_choice);
    results.textContent = winner + " wins. Computer: "+ computer_choice;
});
    





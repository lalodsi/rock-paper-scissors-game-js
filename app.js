const rock =                document.getElementById("r");
const paper =               document.getElementById("p");
const scissors =            document.getElementById("s");
const userScoreText =       document.getElementsByClassName("userScore")[0];
const computerScoreText =   document.getElementsByClassName("computerScore")[0];
const resultText =          document.querySelector("#result");

let userScore = 0;
let computerScore = 0;

function game( userChoice ) {
    const computerChoice = getComputerChoice();
    const text = `Haz elegido ${convertir(userChoice)} vs ${convertir(computerChoice)}`;

    switch(userChoice + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win();
            break;
        case "sr":
        case "ps":
        case "rp":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }

    resultText.innerHTML = text;
}

function getComputerChoice(){
    const options = ['r', 'p', 's'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

function convertir(choice) {
    switch(choice){
        case "r":
            return "piedra";
        case "p":
            return "papel";
        case "s":
            return "tijeras";
    }
}

function win() {
    console.log("Ganaste");
    userScore++;
    userScoreText.innerHTML = userScore;
}
function lose() {
    console.log("Perdiste");
    computerScore++;
    computerScoreText.innerHTML = computerScore;
}
function draw() {
    console.log("Empate");
}

rock.addEventListener("click", () => {
    game('r');
} );
paper.addEventListener("click", () => {
    game('p');
} );
scissors.addEventListener("click", () => {
    game('s');
} );

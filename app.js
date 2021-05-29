const userScore = 0;
const computerScore = 0;

//Capturando el DOM

const userScore_span = document.getElementById('user-score');
const computarScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board')
const result_div = document.querySelector(".result");

const rock_div      = document.getElementById("r");
const paper_div     = document.getElementById("p");
const scissors_div  = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return choices[numeroAleatorio];
}

function Game (userChoice){
    /*
    generar un eleemento aleatorio ( r p t )
    comparar con la eleccion del usuario
    asignamos los puntos al usuario o a la computadora
    */
}

function main(){
    rock_div.addEventListener('click', function() {
        Game('piedra')
    })

    paper_div.addEventListener('click', function() {
        Game('papel')
    })

    scissors_div.addEventListener('click', function() {
        Game('tijeras')
    })
}

main();
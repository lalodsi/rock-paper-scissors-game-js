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
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            console.log('You win!');
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('Computer Win!')
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('It is a draw')
            break;
        default:
            console.log('Error')
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        Game('r')
    })

    paper_div.addEventListener('click', function() {
        Game('p')
    })

    scissors_div.addEventListener('click', function() {
        Game('s')
    })
}

main();
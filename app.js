let userScore = 0;
let computerScore = 0;

//Capturando el DOM

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector(".result > p");

const rock_div      = document.getElementById("r");
const paper_div     = document.getElementById("p");
const scissors_div  = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return choices[numeroAleatorio];
}

function modificarHTML() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function convertir(eleccion) {
    switch (eleccion){
        case 'r':
            return 'piedra';
        case 'p':
            return 'papel';
        case 's':
            return 'tijeras';
    }
}

function win(user, computer) {
    userScore++;
    modificarHTML();
    result_p.innerHTML = convertir(user) + ' es mejor que ' + convertir(computer) + ', tu ganas!';
}
function lose(user, computer) {
    computerScore++;
    modificarHTML();
    result_p.innerHTML = convertir(user) + ' es peor que ' + convertir(computer) + ', tu pierdes!';
}
function draw(user, computer) {
    modificarHTML();
    result_p.innerHTML = convertir(user) + ' es igual que ' + convertir(computer) + ', es un empate!';
}

function Game (userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
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
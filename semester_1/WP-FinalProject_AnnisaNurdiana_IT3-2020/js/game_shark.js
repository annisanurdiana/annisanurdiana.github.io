const corals = document.querySelectorAll('.coral');
const scoreBoard = document.querySelector('.score');
const sharks = document.querySelectorAll('.shark');

let lastCoral;
let timeUp = false;
let score = 0;

//create a function to make a random time for shark to pop from the coral
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomCoral(corals){
    const index  = Math.floor(Math.random() * corals.length);
    const coral = corals[index];

    //prevent same hole from getting the same number
    if (coral === lastCoral){
        return randomCoral(corals);
    }
    lastCoral = coral;
    return coral;
}

function peep() {
    const time = randomTime(700, 1400); //get a random time to determine how long shark should peep
    const coral = randomCoral(corals); //get the random coral from the randomHole function
    coral.classList.add('up'); //add the CSS class so selected shark can "pop up"
    setTimeout(() => {
        coral.classList.remove('up'); //make the selected shark "pop down" after a random time
        if(!timeUp) {
            peep();
        }
    }, time);
}

let timesUp;
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 20000) //show random shark for 20 seconds
    timesUp = setTimeout(function(){ alert("Time's Up"); }, 20000); // just reminder "Time's Up!"
}

function wack(e){
    //klik ujung bagian hiunya supaya mendapatkan skor
    score++;
    this.parentNode.classList.remove('up'); 
    //this refers to item clicked
    scoreBoard.textContent = score;
}

sharks.forEach(shark => shark.addEventListener('click', wack))

//-------------x--------------x--------------//
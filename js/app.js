/*-------------------------------- Constants --------------------------------*/
const state={
 boredom:0,
hunger:0,
sleepiness:0,
}



/*---------------------------- Variables (state) ----------------------------*/
let timer
let gameOver


/*------------------------ Cached Element References ------------------------*/
const playBtnEl = document.getElementById("play")
const feedBtnEl = document.getElementById("feed")
const sleepBtnEl = document.getElementById("sleep")
const boredomStatEl = document.getElementById("boredom")
const hungerStatEl = document.getElementById("hunger")
const sleepinessStatEl = document.getElementById("sleepiness")
const gameMessageEl = document.getElementById("message")
const resetBtnEl = document.getElementById("restart")
console.log('clicked button')
/*-------------------------------- Functions --------------------------------*/
function init(){
     resetBtnEl.classList.add("hidden")
     gameMessageEl.classList.add("hidden")
gameOver= false;
state.boredom=0
state.hunger=0
state.sleepiness=0
render()
timer= setInterval(runGame,2000)
}
console.log('the game is running!')

function render(){
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepinessStatEl.textContent = state.sleepiness

    if (
        gameOver=== true
    ){
     clearInterval(timer)
         resetBtnEl.classList.remove("hidden")
         gameMessageEl.classList.remove("hidden")
    }

}
function playBtnClick (){
    state.boredom=0
    render()
}

function feedBtnClick (){
    state.hunger=0
    render()
}
function sleepBtnClick (){
    state.sleepiness=0
    render()
}
function resetBtnClick(){

}

function updateStates (){
    let incBoredom= Math.floor(Math.random() * 4);
    let incHunger= Math.floor(Math.random() * 4);
    let incSleepiness= Math.floor(Math.random() * 4);
    state.boredom += incBoredom;
    state.hunger+= incHunger;
    state.sleepiness += incSleepiness
}
function checkGameOver(){
    if(
        state.boredom>=10 ||
        state.sleepiness>=10 ||
        state.hunger>=10


    ){
        gameOver=true
    }
}
function runGame(){
    updateStates()
    checkGameOver()
    render()
}

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener("click", playBtnClick)
feedBtnEl.addEventListener("click", feedBtnClick)
sleepBtnEl.addEventListener("click", sleepBtnClick)
resetBtnEl.addEventListener("click", init)

init()

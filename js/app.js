/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const state={
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}
let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
const boredomStatEl=document.getElementById("#boredom-stat")
const hungerStatEl=document.getElementById("#hunger-stat")
const sleepStatEl= document.getElementById("#sleepiness-stat")

const playBtnEl=document.getElementById("#play")
const feedBtnEl= document.getElementById("#feed")
const sleepBtnEl= document.getElementById("#sleep")

const gameMessageEl= document.getElementById("#message")
const resetBtnEl = document.getElementById ("#restart")


/*-------------------------------- Functions --------------------------------*/
 function runGame(){
        updateStates()
        render()
    function init(){
    gameOver= false
    timer=setInterval(runGame,2000)
    render()}
    console.log(init)
    render()
    function updateStates(){
        state.boredom=0
        state.hunger=0
        state.sleepiness=0
    }
   
    function render(){
        boredomStatEl.textContent= state.boredom
        hungerStatEl.textContent=state.hunger
        sleepStatEl.textContent=state.sleepiness
        if(gameOver=true )
    }
    init(runGame)
    function checkGameOver(){
        if (state.boredom || state.hunger|| state.sleepiness>=10)
{
    gameOver= true
}  else{
    gameOver= false
}  }
}


/*----------------------------- Event Listeners -----------------------------*/


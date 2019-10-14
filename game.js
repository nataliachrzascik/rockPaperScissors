/*
0.przejmuje wartość co zostało kliknięte,oznaczenie tego na czerwono
1.obsłużyć przycisk let's play, ustalam co wybrał komputer
2.ustalam kto wygrał
3.na ekran dane o grze
*/
const start =document.querySelector('.start');
const hands = [...document.querySelectorAll('.select img')];
const winner = document.querySelector('h2');
const information={
    number:0,
    wins:0,
    losses:0,
    draws:0,
}
const game={
    playerChoice:"",
    aiChoice:"",
}
function checkEmpty(){
        alert("Wybierz dłoń");
        return;
}
function playerHand(){
    this.style.boxShadow="0 0 0 1px red";
    game.playerChoice= this.dataset.option;
    
}
function aiHand(){
    const numberAiChoice = Math.floor(Math.random()*3);
    game.aiChoice = hands[numberAiChoice].dataset.option;
    
}
function whoWin(human,computer){
    if((human==="papier"&&computer==="kamień")||(human==="kamień"&&computer==="nożyczki")||(human==="nożyczki"&&computer==="papier")){
        winner.textContent = "Wygrałeś";
        winner.style.color = "green";
        document.querySelector(".numbers span").textContent= ++information.number;
        document.querySelector(".wins span").textContent=++information.wins;
    }
    else if((computer==="papier"&&human==="kamień")||(computer==="kamień"&&human==="nożyczki")||(computer==="nożyczki"&&human==="papier")){
        winner.textContent = "Przegrałeś";
        winner.style.color = "red";
        document.querySelector(".numbers span").textContent= ++information.number;
        document.querySelector(".losses span").textContent=++information.losses;
    }
    else{
        winner.textContent = "Remis";
        winner.style.color = "yellow";
        document.querySelector(".numbers span").textContent= ++information.number;
        document.querySelector(".draws span").textContent=++information.draws;
    }
    
}
function showChoices(your,ai){
    document.querySelector('[data-summary="your-choice"]').textContent=your;
    document.querySelector('[data-summary="ai-choice"]').textContent=ai;
    
}
function cleanData(){
    game.aiChoice="";
    game.playerChoice="";
}
function startGame(){
    if(game.playerChoice===""){
       checkEmpty();
        return;
       }
    //console.log(game.playerChoice);
    hands.forEach((hand)=>{
        hand.style.boxShadow="";
    });
    aiHand();
    //console.log(game.aiChoice);
    whoWin(game.playerChoice,game.aiChoice);
    showChoices(game.playerChoice,game.aiChoice);
    cleanData();
    
}
hands.forEach(hand=>hand.addEventListener("click",playerHand));
start.addEventListener("click",startGame);
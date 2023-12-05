let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards=[firstCard,secondCard]
let hasBlackJack=false
let isAlive= true
let message=""

let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let playerEl=document.getElementById("player-el")

let player={
    name: "Per",
    chips: 200
}
playerEl.textContent= player.name +": $"+player.chips

function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent ="cards: "  
    for(let i=0; i<cards.length;i++){
        cardsEl.textContent+= cards[i]+" "
    }
    sumEl.textContent ="sum: " +sum
    if(sum<=20){
        message=("Do you want to draw a new card?")
    }
    else if(sum === 21){
        message=("You have got Blackjack")
        hasBlackJack=true
    }
    else{
        message=("You're out of the game.")
        isAlive=false
    }
    messageEl.textContent=message
}
function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber>10){
        return 10
    }
    else if(randomNumber ==1){
        return 11
    }
    else{
        return randomNumber
    }
}
let cards=[]
let sum=0
let hasbjack=false
let isalive=false
let message=""

let msgEl=document.getElementById("msg-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.getElementById("card-el")
let personEl=document.getElementById("person-el")

let per={
    name:"Levi",
    coins: 20
}

personEl.textContent=per.name+": $"+per.coins

function startgame()
{
    isalive=true
    let card1=getrandom()
    let card2=getrandom()
    cards=[card1,card2]
    sum=card1+card2
    rendergame()
}

function getrandom()
{
    let random=Math.floor(Math.random()*13) +1
    if(random>10){
        return 10
    }
    else if(random ===1)
    {
        return 11
    }
    else{
        return random
    }
}



function rendergame(){

    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent +=cards[i]+" "
    }
    sumEl.textContent="Sum :"+sum

    if(sum<21){
        message="Want to draw another card"
    }
    else if(sum ===21)
    {
        message="You've got a blackjack"
        hasbjack=true
    }
    else{
        message="You're out of the game"
        isalive=false 
    }
    msgEl.textContent=message
}

function newcard(){

    if(isalive===true && hasbjack===false)
    {

        console.log("draw a new card")
        let card=getrandom()
        sum += card
        cards.push(card)
        rendergame()
    }
    

}
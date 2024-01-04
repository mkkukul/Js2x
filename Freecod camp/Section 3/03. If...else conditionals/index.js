let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard + 2

if (sum < 21) {
    console.log("Do you want to draw a new card?😐")
} else if (sum ===21){
    console.log("Wohoo! You've got Blackjack🤑")

}else if (sum> 21) {
    console.log("You're out of the game!")
}
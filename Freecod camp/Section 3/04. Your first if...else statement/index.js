// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age < 21) {
    console.log("Do you want to draw a new card?😐")
} else if (age ===21){
    console.log("Wohoo! You've got Blackjack🤑")

}else if (age> 21) {
    console.log("You're out of the game!🥹")
}
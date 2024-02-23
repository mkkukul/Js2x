let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// if (sum < 21) {
    // console.log("Do you want to draw a new card?😐")
// } else if (sum ===21){
    // console.log("Wohoo! You've got Blackjack🤑")
// 
// }else if (sum> 21) {
    // console.log("You're out of the game!🥹")
// }

// if (sum<=20) {
    // console.log("Do you want to draw a new card? 🙂")
// } else if (sum=== 21){
    // console.log("Wohoo! You've got Blackjack! 🥳")
// }else if(sum>21){
// console.log("You're out of the game! 😭")
// }
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂"); // Toplam 21'den küçükse, "Yeni bir kart çekmek ister misiniz?" mesajı görüntülenir
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳"); // Toplam 21'e eşitse, "Wohoo! Blackjack yaptınız!" mesajı görüntülenir
} else if (sum > 21) {
    console.log("You're out of the game! 😭"); // Toplam 21'den büyükse, "Oyundan çıktınız!" mesajı görüntülenir
}


if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂"); // Toplam 20'den küçük veya eşitse, "Yeni bir kart çekmek ister misiniz?" mesajı görüntülenir
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳"); // Toplam 21'e eşitse, "Wohoo! Blackjack yaptınız!" mesajı görüntülenir ve hasBlackJack değişkeni true olarak ayarlanır
    hasBlackJack = true;
} else {
    console.log("You're out of the game! 😭"); // Toplam ne 20'den küçük ne de 21'e eşitse, "Oyundan çıktınız!" mesajı görüntülenir
}

console.log(hasBlackJack); // hasBlackJack değişkenini konsola yazdırır

// Eğer toplam 20'den küçük veya eşitse, "Yeni bir kart çekmek ister misiniz?" mesajı görüntülenir.
//  Eğer toplam 21'e eşitse, "Wohoo! Blackjack yaptınız!" mesajı görüntülenir ve hasBlackJack değişkeni true olarak ayarlanır.
// Toplam ne 20'den küçük ne de 21'e eşitse, "Oyundan çıktınız!" mesajı görüntülenir.
// hasBlackJack değişkeni, 21'e eşit olan bir toplam varsa true olur.


// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
// }

// // CASH OUT!
// console.log(hasBlackJack)
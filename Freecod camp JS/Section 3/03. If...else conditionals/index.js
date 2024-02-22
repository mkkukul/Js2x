let firstCard = 11; // İlk kartın değeri
let secondCard = 10; // İkinci kartın değeri
let sum = firstCard + secondCard + 2; // Kartların toplam değeri hesaplanır

if (sum < 21) {
    console.log("Do you want to draw a new card?😐"); // Toplam 21'den küçükse, oyuncuya yeni bir kart çekmek isteyip istemediği sorulur
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack🤑"); // Toplam 21'e eşitse, oyuncuya Blackjack yaptığı bildirilir
} else if (sum > 21) {
    console.log("You're out of the game!🥹"); // Toplam 21'den büyükse, oyuncunun oyun dışı kaldığına dair bir mesaj verilir
}



// let firstCard = 11
// let secondCard = 10
// let sum = firstCard + secondCard + 2

// if (sum < 21) {
//     console.log("Do you want to draw a new card?😐")
// } else if (sum ===21){
//     console.log("Wohoo! You've got Blackjack🤑")

// }else if (sum> 21) {
//     console.log("You're out of the game!🥹")
// }
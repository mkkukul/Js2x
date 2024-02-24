let hands = ["rock", "paper", "scissor"];

// Fonksiyon, "hands" dizisinden rastgele bir el işareti döndürür
function getRandomHand() {
    // Rastgele bir indeks seçilir
    let randomIndex = Math.floor(Math.random() * hands.length);
    // Seçilen indeksteki el işareti döndürülür
    return hands[randomIndex];
}

// getRandomHand fonksiyonu çağrılarak rastgele bir el işareti konsola yazdırılır
console.log(getRandomHand());



// let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function getRandomHand(){
    // let randomIndex = Math.floor(Math.random()* hands.length);
    // return hands[randomIndex];
    //  
// }
// console.log(getRandomHand());

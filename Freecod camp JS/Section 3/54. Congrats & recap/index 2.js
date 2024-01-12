// Oyuncunun adı "Per" ve başlangıçta 200 çip ile başlar.
let player = {
    name: "Per",
    chips: 200
}

// Oyuncunun aldığı kartların listesi.
let cards = []

// Oyuncunun kartlarının toplam değeri.
let sum = 0

// Oyuncunun 21'e ulaşıp ulaşmadığını kontrol eden bayrak.
let hasBlackJack = false

// Oyuncunun oyunun dışında olup olmadığını kontrol eden bayrak.
let isAlive = false

// Oyuncuya gösterilecek mesajı tutan değişken.
let message = ""

// HTML'deki belirli elementlere erişim sağlayan değişkenler.
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Oyuncunun adı ve çipleri HTML'de gösterilir.
playerEl.textContent = player.name + ": $" + player.chips

// Rastgele bir kart döndüren fonksiyon.
function getRandomCard() {
    // 1 ile 13 arasında rastgele bir sayı üretir.
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        // Eğer sayı 10'dan büyükse, kart değeri 10 olur.
        return 10
    } else if (randomNumber === 1) {
        // Eğer sayı 1 ise, kart değeri 11 olur.
        return 11
    } else {
        // Diğer durumlar için kart değeri sayının kendisi olur.
        return randomNumber
    }
}

// Oyunu başlatan fonksiyon.
function startGame() {
    isAlive = true
    // İki adet rastgele kart alınır.
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    // Kartların toplam değeri hesaplanır.
    sum = firstCard + secondCard
    // Oyun durumu ekrana yansıtılır.
    renderGame()
}

// Oyuncunun kartlarını, toplamını ve mesajını ekrana gösteren fonksiyon.
function renderGame() {
    // Kartların ekranda gösterileceği alan temizlenir.
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        // Kartlar ekrana yazdırılır.
        cardsEl.textContent += cards[i] + " "
    }
    
    // Toplam kart değeri ekrana yazdırılır.
    sumEl.textContent = "Sum: " + sum

    // Toplam değere göre mesaj oluşturulur.
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // Oluşturulan mesaj ekrana yazdırılır.
    messageEl.textContent = message
}

// Yeni bir kart çeken fonksiyon.
function newCard() {
    // Oyuncu oyun içindeyse ve 21'e ulaşmamışsa yeni bir kart çekilir.
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        // Oyun durumu güncellenir.
        renderGame()        
    }
}

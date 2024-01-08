let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    // Math.random() 0 ile 1 arasında rastgele bir ondalıklı sayı döndürür.
    // Bu değeri 13 ile çarpıp Math.floor ile en yakın tam sayıya yuvarlayarak 1 ile 13 arasında bir rastgele sayı elde ediyoruz.
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    // Eğer rastgele sayı 11, 12 ya da 13 ise kartın değeri 10'dur.
    if (randomNumber > 10) {
        return 10;
    } 
    // Eğer rastgele sayı 1 ise kartın değeri 11'dir.
    else if (randomNumber === 1) {
        return 11;
    } 
    // Diğer durumlarda rastgele sayı direkt olarak kartın değeridir.
    else {
        return randomNumber;
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

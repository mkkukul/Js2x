// Verileri tanımla
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// DOM'dan bir düğmeyi al ve bir değişkende sakla
const janeBtn = document.getElementById("jane-btn")

// Düğmeye tıklama olayını dinlemek için addEventListener() kullan
janeBtn.addEventListener("click", function(){
    // Jane'in skorunu konsola yazdır
    console.log(data[0].score)
})



let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane-btn")
// Use addEventListener() to listen for button clicks
janeBtn.addEventListener("click", function(){
    console.log(data[0].score)
})
// Log Jane's score when the button is clicked (via data)

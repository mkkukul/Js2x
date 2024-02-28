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

//! const janeBtn = document.getElementById("jane-btn"): DOM'dan "jane-btn" kimliğine sahip düğmeyi alır ve janeBtn değişkenine atar.
// 
//  janeBtn.addEventListener("click", function(){...}): janeBtn düğmesine bir tıklama olay dinleyicisi ekler. Tıklama algılandığında, içindeki işlev çalıştırılır.
// 
// console.log(data[0].score): Tıklama algılandığında, Jane'in skoru data dizisinden alınır ve konsola yazdırılır.

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

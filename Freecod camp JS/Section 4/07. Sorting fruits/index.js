// Bir meyve dizisi oluşturulur
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

// Elmaların sergilendiği rafı temsil eden bir değişken oluşturulur ve DOM'dan "apple-shelf" ID'sine sahip öğe alınır
let appleShelf = document.getElementById("apple-shelf");

// Portakalların sergilendiği rafı temsil eden bir değişken oluşturulur ve DOM'dan "orange-shelf" ID'sine sahip öğe alınır
let orangeShelf = document.getElementById("orange-shelf");


// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
//

// sortFruit() fonksiyonu tanımlanır
function sortFruit() {
    // Meyve dizisini döngüyle gezin
    for (let i = 0; i < fruit.length; i++) {
        // Eğer meyve "🍎" ise
        if (fruit[i] === "🍎") {
            // "appleShelf" raflarına bir "🍎" eklenir
            appleShelf.textContent += "🍎";
        } 
        // Eğer meyve "🍊" ise
        else if (fruit[i] === "🍊") {
            // "orangeShelf" raflarına bir "🍊" eklenir
            orangeShelf.textContent += "🍊";
        }      
    }
}

// Fonksiyon çağrılır
sortFruit();


// function sortFruit(){
    // for(let i = 0; i<fruit.length; i++){
        // if (fruit[i] === "🍎"){
            // appleShelf.textContent += "🍎"
        // } else if (fruit[i] === "🍊"){
            // orangeShelf.textContent += "🍊"
        // }      
    // }
// }
// sortFruit();
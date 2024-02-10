// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count



let countEl = document.getElementById("count-el"); // "count-el" ID'sine sahip HTML elementini seç ve countEl değişkenine atar

console.log(countEl); // Seçilen HTML elementini konsola yazdırır

let count = 0; // Bir sayacı değişkeni oluştur ve sıfıra ayarla

function increment() {
    count = count + 1; // Değişkeni bir artır
    countEl.innerText = count; // Güncellenmiş değeri seçilen HTML elementinin metin içeriği olarak ayarlar
}


// let countEl = document.getElementById("count-el")
// 
// console.log(countEl)
// 
// let count = 0
// 
// function increment() {
    // count = count + 1
    // countEl.innerText = count
// }



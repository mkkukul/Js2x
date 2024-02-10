
let countEl = document.getElementById("count-el"); // "count-el" ID'sine sahip HTML elementini seçer ve countEl değişkenine atar

let count = 0; // Bir sayacı değişkeni tanımlar ve sıfıra ayarlar

function increment() {
    count = count + 1; // Sayacı bir artırır
    countEl.innerText = count; // Güncellenmiş sayacı, seçilen HTML elementinin metin içeriği olarak ayarlar
}


// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }



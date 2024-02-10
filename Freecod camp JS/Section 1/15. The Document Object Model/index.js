
let countEl = document.getElementById("count-el"); // "count-el" ID'sine sahip HTML elementini seçer ve countEl değişkenine atar

let count = 0; // Bir sayacı değişkeni tanımlar ve sıfıra ayarlar

function increment() {
    count = count + 1; // Sayacı bir artırır
    countEl.innerText = count; // Güncellenmiş sayacı, seçilen HTML elementinin metin içeriği olarak ayarlar
}

// !Bu kod, document.getElementById("count-el") ifadesiyle HTML belgesindeki bir elementi seçer. Bu element, "count-el" ID'sine sahip bir element olmalıdır. let count = 0 ifadesi, bir sayacı değişkeni tanımlar ve başlangıç değerini sıfır olarak ayarlar. increment fonksiyonu, her çağrıldığında count değişkenini bir artırır (count = count + 1) ve güncellenmiş değeri seçilen HTML elementinin metin içeriği olarak (innerText) ayarlar. Bu sayede, HTML belgesindeki belirli bir elementin içeriği JavaScript tarafından dinamik olarak güncellenir.

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }



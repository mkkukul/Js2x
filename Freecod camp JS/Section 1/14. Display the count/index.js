// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count



let countEl = document.getElementById("count-el"); // "count-el" ID'sine sahip HTML elementini seç ve countEl değişkenine atar

console.log(countEl); // Seçilen HTML elementini konsola yazdırır

let count = 0; // Bir sayacı değişkeni oluştur ve sıfıra ayarla

function increment() {
    count = count + 1; // Değişkeni bir artır
    countEl.innerText = count; // Güncellenmiş değeri seçilen HTML elementinin metin içeriği olarak ayarlar
}


//! Bu kod, document.getElementById("count-el") ifadesiyle HTML belgesindeki bir elementi seçer. Bu element, "count-el" ID'sine sahip bir element olmalıdır. Ardından, console.log(countEl) ifadesi seçilen elementi konsola yazdırır. let count = 0 ifadesi, bir sayacı değişkeni oluşturur ve başlangıç değerini sıfır olarak ayarlar. increment fonksiyonu, her çağrıldığında count değişkenini bir artırır (count = count + 1) ve güncellenmiş değeri seçilen HTML elementinin metin içeriği olarak (innerText) ayarlar. Bu sayede, HTML belgesindeki belirli bir elementin içeriği JavaScript tarafından dinamik olarak güncellenir.

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



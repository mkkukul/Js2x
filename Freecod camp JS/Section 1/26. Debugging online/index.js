//! save-el ID'sine sahip HTML öğesini seçer ve saveEl değişkenine atar
let saveEl = document.getElementById("save-el");

//! count-el ID'sine sahip HTML öğesini seçer ve countEl değişkenine atar
let countEl = document.getElementById("count-el");

// Sayaç değişkeni oluşturur ve başlangıç değerini 0 olarak atar
let count = 0;

//! countEl'i 1 artırır ve güncellenmiş değeri sayfa üzerinde görüntüler
function increment() {
    count += 1;
    countEl.innerText = count;
}

//! Sayaç değerini saveEl'in içeriğine ekler
function save() {
    // Sayaç değerini bir stringe dönüştürür ve sonuna "-" ekler
    let countStr = count + " - ";
    // Yeni sayaç değerini saveEl'in mevcut içeriğine ekler
    saveEl.textContent += countStr;
}

//! Bu kod, save() fonksiyonunda, sayaç değerini bir dizeye dönüştürür ve sonuna bir tire işareti ekler. Ardından, bu yeni değeri saveEl öğesinin mevcut içeriğine ekler, böylece her çağrıldığında mevcut sayaç değerinin bir kopyası kaydedilir.


// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
// }

//  Google:
//  innerText alternative mdn
//  
let count = 0; // Sayacı başlatır
let saveEl = document.getElementById("save-el"); // save-el ID'li öğeyi alır
let countEl = document.getElementById("count-el"); // count-el ID'li öğeyi alır

function increment() {
    count += 1; // Sayacı bir artırır
    countEl.textContent = count; // countEl öğesinin metin içeriğini günceller
}

function save() {
    let countStr = count + " - "; // Sayacın değerini ve bir tire işaretini içeren bir dize oluşturur
    saveEl.textContent += countStr; // saveEl öğesinin metin içeriğine sayıyı ekler
    countEl.textContent = 0; // countEl öğesinin metin içeriğini sıfırlar
    count = 0; // Sayacı sıfırlar
}

console.log("Let's count people on the subway!"); // Konsola bir mesaj yazdırır



// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count people on the subway!")

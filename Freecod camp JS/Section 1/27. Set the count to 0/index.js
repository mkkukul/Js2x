let saveEl = document.getElementById("save-el"); // save-el ID'li öğeyi alır
let countEl = document.getElementById("count-el"); // count-el ID'li öğeyi alır
let count = 0; // Sayacı başlatır

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


//! Bu kod parçacığı, HTML'deki belirli öğeleri seçer, bir sayacı yönetir ve sayacın değerini kullanarak işlemler yapar. increment fonksiyonu sayacı bir artırır ve bu değeri sayfa üzerindeki bir öğeye yansıtır. save fonksiyonu ise sayacın değerini bir metin öğesine ekler ve daha sonra sayacı sıfırlar.
// 


// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }


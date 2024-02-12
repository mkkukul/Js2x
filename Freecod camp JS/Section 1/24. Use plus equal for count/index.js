// count-el ID'sine sahip HTML öğesini seçer ve countEl değişkenine atar
let countEl = document.getElementById("count-el");

// Sayacı temsil eden bir değişken tanımlar ve başlangıç değerini 0 olarak atar
let count = 0;

// Sayacı bir artırır ve güncellenmiş değeri countEl'in metin içeriğine atar
function increment() {
    // Artırma işlemini kısaltılmış biçimde yapar
    count += 1;
    // Güncellenmiş sayac değerini countEl'in metin içeriğine atar
    countEl.innerText = count;
}

// Sayacın mevcut değerini konsola yazdıran bir fonksiyon
function save() {
    console.log(count);
}




// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//!Change this to use the plus equal technique you've learned
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }



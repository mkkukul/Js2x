// count-el elementini seç ve countEl değişkenine sakla
let countEl = document.getElementById("count-el");

let count = 0; // Bir sayacı değişkeni tanımla ve sıfıra ayarla

function increment() {
    count = count + 1; // Sayacı bir artır
    countEl.innerText = count; // Sayacın güncel değerini count-el elementinin metin içeriği olarak ayarla
}

function save() {
    console.log(count); // Sayacın güncel değerini konsola yazdır
}




// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }



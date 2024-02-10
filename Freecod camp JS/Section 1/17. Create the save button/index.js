// count-el elementini seçin ve countEl değişkenine atayın
let countEl = document.getElementById("count-el");

// Bir sayacı değişkeni tanımlayın ve başlangıç değerini sıfıra ayarlayın
let count = 0;

// increment işlevini tanımlayın
function increment() {
    // Sayacı bir artırın
    count = count + 1;
    // Artırılmış sayacı countEl'in metin içeriği olarak ayarlayın
    countEl.innerText = count;
}

// save işlevini tanımlayın
function save() {
    // Sayacın mevcut değerini konsola kaydedin
    console.log(count);
}

//! Bu kod, let countEl = document.getElementById("count-el") ifadesiyle bir HTML belgesindeki bir elementi seçer ve bu elementi countEl değişkenine atar. let count = 0 ifadesiyle bir sayacı değişkeni tanımlanır ve başlangıç değeri sıfırlanır. increment fonksiyonu, her çağrıldığında sayacı bir artırır (count = count + 1) ve artırılmış değeri countEl elementinin metin içeriği olarak ayarlar (countEl.innerText = count). save fonksiyonu ise her çağrıldığında mevcut sayacın değerini konsola kaydeder (console.log(count)). Kodun içindeki yorum satırları, her adımın ne yaptığını açıklar.






// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

//  1. Create a function, save(), which logs out the count when it's called
//  function save(){
//     console.log(count)
//  }


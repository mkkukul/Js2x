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


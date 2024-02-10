
let countEl = document.getElementById("count-el"); // "count-el" ID'sine sahip HTML elementini seçer ve countEl değişkenine atar

let count = 0; // Bir sayacı değişkeni tanımlar ve sıfıra ayarlar

function increment() {
    count = count + 1; // Sayacı bir artırır
    countEl.innerText = count; // Güncellenmiş sayacı, seçilen HTML elementinin metin içeriği olarak ayarlar
}



//  grab the count-el element, store it in a countEl variable
// let count = 0

// function increment() {
//     count = count + 1
//     console.log(count)
//  set countEl's innerText to the count
// }



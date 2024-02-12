// save-el ID'sine sahip HTML öğesini seçer ve saveEl değişkenine atar
let saveEl = document.getElementById("save-el");

// count-el ID'sine sahip HTML öğesini seçer ve countEl değişkenine atar
let countEl = document.getElementById("count-el");

// Sayaç değişkeni oluşturur ve başlangıç değerini 0 olarak atar
let count = 0;

// countEl'i 1 artırır ve güncellenmiş değeri sayfa üzerinde görüntüler
function increment() {
    count += 1;
    countEl.textContent = count;
}

// Sayaç değerini saveEl'in içeriğine ekler
function save() {
    // Sayaç değerini bir stringe dönüştürür ve "-" ile birleştirir
    let countStr = count + "-";
    // Yeni sayaç değerini saveEl'in mevcut içeriğine ekler
    saveEl.textContent += countStr;
    // Sayaç değerini konsola yazdırır
    console.log(count);
}

//! Bu kod, save() fonksiyonunda, sayaç değerini bir dizeye dönüştürür ve sonuna bir tire işareti ekler. Ardından, bu yeni değeri saveEl öğesinin mevcut içeriğine ekler, böylece her çağrıldığında mevcut sayaç değerinin bir kopyası kaydedilir.




// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0
// console.log(saveEl)
// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + "-"
//     saveEl.textContent += countStr
//2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//3. Render the variable in the saveEl using innerText
//NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }




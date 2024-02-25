// saveLead() fonksiyonu tanımlanır
function saveLead() {
    // "Button clicked from onclick attribute!" metni konsola yazdırılır
    console.log("Button clicked from onclick attribute!");
}

// inputBtn değişkeni, DOM'da "input-btn" id'sine sahip bir öğeyi alır
let inputBtn = document.getElementById("input-btn");

// inputBtn öğesi üzerinde 'click' olayını dinleyen bir olay dinleyici eklenir
inputBtn.addEventListener('click', function() {
    // "Button cliked from addEventListener" metni konsola yazdırılır
    console.log("Button clicked from addEventListener");
});



// function saveLead() {
//     console.log("Button clicked from onclick attribute!")
// }

// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener('click', function() {
//     console.log("Button cliked from addEventListener")
// })

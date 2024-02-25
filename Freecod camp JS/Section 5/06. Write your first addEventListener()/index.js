// 1. DOM'dan kutuyu al ve bir değişkende sakla
let box = document.getElementById("box");

// 2. Kutuya bir tıklama olay dinleyicisi ekle
box.addEventListener("click", function(){
    // 3. Kutuya tıklandığında "Kutuyu açmak istiyorum!" mesajını konsola yazdır
    console.log("I want to open the box!");
})



// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked
//! let box = document.getElementById("box");
//! box.addEventListener("click", function(){
    // console.log("I want to open the box!");
// })
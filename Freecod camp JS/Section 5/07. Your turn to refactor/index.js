// 'SAVE INPUT' düğmesini al ve bir değişkende sakla
let inputBtn = document.getElementById("input-btn");

// 'SAVE INPUT' düğmesine tıklama olayı dinleyicisi ekle
inputBtn.addEventListener("click", function(){
    // Düğmeye tıklandığında konsola "Button Clicked!" mesajını yazdır
    console.log("Button Clicked!");
})

//! Bu kod, "SAVE INPUT" düğmesine tıklama olayını dinler ve tıklama gerçekleştiğinde "Button Clicked!" mesajını konsola yazdırır. .addEventListener() kullanımı, kodu daha açık ve okunabilir hale getirir ve JavaScript'te olayları ele almanın modern bir yoludur.


// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button
//! let inputBtn = document.getElementById("input-btn");
//! inputBtn.addEventListener("click", function(){
    // console.log("Button Clicked!");
// })
// 
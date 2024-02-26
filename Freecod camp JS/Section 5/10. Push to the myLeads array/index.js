let myLeads = []; // Boş bir dizi oluşturuldu
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Giriş düğmesine tıklandığında "www.awesomelead.com" değerini myLeads dizisine ekleyin
inputBtn.addEventListener("click", function() {
    // "www.awesomelead.com" değerini myLeads dizisine ekle
    myLeads.push("www.awesomelead.com");
    // Güncellenmiş diziyi konsola yazdır
    console.log(myLeads);
});



// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// // Push the value "www.awesomelead.com" to myArray when the input button is clicked

// inputBtn.addEventListener("click", function() {
    
//     myLeads.push("www.awesomelead.com");
//     console.log(myLeads)
// })

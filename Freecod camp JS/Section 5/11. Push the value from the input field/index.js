let myLeads = []; // Boş bir dizi oluşturuldu
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Giriş düğmesine tıklandığında, giriş alanından alınan değeri myLeads dizisine ekle
inputBtn.addEventListener("click", function() {
    // Giriş alanından alınan değeri myLeads dizisine ekleyin
    myLeads.push(inputEl.value);
    // Güncellenmiş diziyi konsola yazdır
    console.log(myLeads);
});



// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
     //! Push the value from the inputEl into the myLeads array 
     //! instead of the hard-coded "www.awesomeleads.com" value
     //! Google -> "get value from input field javascript"
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })



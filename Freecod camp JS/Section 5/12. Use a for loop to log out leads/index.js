let myLeads = [ "www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]; // Başlangıçta üç öğe içeren bir dizi
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// inputBtn düğmesine tıklandığında myLeads dizisine inputEl'in değerini ekle
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

// myLeads dizisindeki öğeleri bir döngü kullanarak konsola yazdır
for(let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}



// let myLeads = [ "www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })


//!  Log out the items in the myLeads array using a for loop 

// for(let i =0; i < myLeads.length; i++) {
//     console.log(myLeads[i]);
// }


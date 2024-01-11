let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Kullanıcı butona tıkladığında, giriş değerini myLeads dizisine ekleyin
// //! When the user clicks the button, add the input value to the myLeads array
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

// 1. Tüm liste öğeleri için HTML'i tutacak listItems adında bir değişken oluşturun
// //! Create a variable, listItems, to hold all the HTML for the list items
// //! Assign it to an empty string to begin with
let listItems = "";

// myLeads dizisindeki her bir öğeyi listItems değişkenine ekleyin
// //! Add each item from the myLeads array to the listItems variable
for (let i = 0; i < myLeads.length; i++) {
    // 2. Öğeyi listItems değişkenine ekleyin, ulEl.innerHTML yerine
    // //! Add the item to the listItems variable instead of modifying ulEl.innerHTML directly
    listItems += "<li>" + myLeads[i] + "</li>";
}

// 3. Oluşturulan listItems değişkenini, sıralı listeye (ulEl) atayın
// //! Render the content of the listItems variable inside the unordered list (ulEl)
ulEl.innerHTML = listItems;

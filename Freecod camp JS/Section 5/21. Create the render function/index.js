let myLeads = []; // //! myLeads dizisini boş olarak tanımlayın.
const inputEl = document.getElementById("input-el"); // //! input-el ID'li HTML öğesini seçin ve inputEl değişkenine atayın.
const inputBtn = document.getElementById("input-btn"); // //! input-btn ID'li HTML öğesini seçin ve inputBtn değişkenine atayın.
const ulEl = document.getElementById("ul-el"); // //! ul-el ID'li HTML öğesini seçin ve ulEl değişkenine atayın.

inputBtn.addEventListener("click", function() { // //! inputBtn öğesine tıklama olayı ekleyin ve aşağıdaki kodları çalıştırın.
    myLeads.push(inputEl.value); // //! inputEl'in değerini myLeads dizisine ekleyin.
    console.log(myLeads); // //! myLeads dizisini konsola yazdırın.
    
    renderLeads(); // //! renderLeads fonksiyonunu çağırın.
});

function renderLeads() { 
    // //! renderLeads adında bir fonksiyon tanımlayın.
    let listItems = ""; 
    // //! listItems adında boş bir string değişkeni oluşturun.
    for (let i = 0; i < myLeads.length; i++) { // //! myLeads dizisindeki her öğe için bir döngü başlatın.
        listItems += "<li>" + myLeads[i] + "</li>"; // //! Her bir öğeyi listItems stringine ekleyin.
    }
    ulEl.innerHTML = listItems; // //! ulEl'in innerHTML özelliğini listItems stringiyle güncelleyin.
}

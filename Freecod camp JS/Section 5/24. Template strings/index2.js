// 1. myLeads: Kullanıcının girdiği URL'leri saklamak için bir dizi. Bu dizi, her yeni URL'yi depolamak için kullanılır.
let myLeads = [];

// 2. inputEl: HTML'de "input-el" ID'li elemente erişmek için kullanılan bir değişken. Bu, kullanıcının URL girebileceği input alanını temsil eder.
const inputEl = document.getElementById("input-el");

// 3. inputBtn: HTML'de "input-btn" ID'li butona erişmek için kullanılan bir değişken. Bu buton, kullanıcının girdiği URL'yi myLeads dizisine eklemek için kullanılır.
const inputBtn = document.getElementById("input-btn");

// 4. ulEl: HTML'de "ul-el" ID'li sırasız liste (unordered list) elementine erişmek için kullanılan bir değişken. Bu liste, kullanıcının eklediği URL'leri gösterecektir.
const ulEl = document.getElementById("ul-el");

// 5. inputBtn (buton) üzerine tıklanma olayına bir dinleyici ekleniyor. Böylece butona tıklandığında belirli bir işlem yapılır.
inputBtn.addEventListener("click", function() {
    // 6. inputEl.value: Kullanıcının girdiği URL'nin değerini alır. 
    // Bu değer, myLeads dizisine eklenir.
    myLeads.push(inputEl.value);
    
    // 7. inputEl.value = "": Kullanıcının URL girişini temizler, böylece yeni bir URL girebilir.
    inputEl.value = "";
    
    // 8. renderLeads(): Eklenen URL'lerin listelendiği bir fonksiyonu çağırır.
    renderLeads();
});

// 9. renderLeads(): myLeads dizisindeki URL'leri görsel olarak listelemek için kullanılan bir fonksiyon.
function renderLeads() {
    // 10. listItems: Her bir URL için oluşturulacak olan listeyi depolamak için kullanılan bir string.
    let listItems = "";
    
    // 11. myLeads dizisindeki her bir URL için döngü oluşturuluyor.
    for (let i = 0; i < myLeads.length; i++) {
        // 12. Template literals kullanılarak her URL için bir liste öğesi oluşturuluyor.
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
            </li>`;
    }
    
    // 13. ulEl.innerHTML: Oluşturulan listeyi HTML içerisindeki sırasız listeye ekler.
    ulEl.innerHTML = listItems;
}

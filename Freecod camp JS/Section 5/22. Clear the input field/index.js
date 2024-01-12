// Boş bir dizi oluşturuluyor. Bu dizi, kullanıcının girdiği URL'leri saklamak için kullanılacak.
let myLeads = [];

// HTML'deki "input-el" ID'li input elementine erişim sağlanıyor.
const inputEl = document.getElementById("input-el");

// HTML'deki "input-btn" ID'li butona erişim sağlanıyor.
const inputBtn = document.getElementById("input-btn");

// HTML'deki "ul-el" ID'li unordered list (sırasız liste) elementine erişim sağlanıyor.
const ulEl = document.getElementById("ul-el");

// Butona tıklama olayı ekleniyor.
inputBtn.addEventListener("click", function() {
    // Kullanıcının girdiği URL, myLeads dizisine ekleniyor.
    myLeads.push(inputEl.value);
    
    // Giriş alanı temizleniyor: Kullanıcının girdiği URL, giriş alanından kaldırılıyor.
    inputEl.value = "";

    // URL'ler sıralı bir şekilde gösteriliyor.
    renderLeads();
});

// URL'leri sıralı bir şekilde göstermek için bu fonksiyon kullanılıyor.
function renderLeads() {
    let listItems = "";
    
    // myLeads dizisindeki her bir URL için bir <li> öğesi oluşturuluyor.
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    
    // Oluşturulan <li> öğeleri, "ul-el" ID'li sırasız listeye ekleniyor.
    ulEl.innerHTML = listItems;
}

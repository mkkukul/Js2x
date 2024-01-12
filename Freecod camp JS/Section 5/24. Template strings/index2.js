// 1. Boş bir dizi oluşturuluyor. Bu dizi, eklenen URL'leri saklayacak.
let myLeads = [];

// 2. input-el ID'li elemente erişim sağlanıyor ve bu element inputEl değişkenine atanıyor.
const inputEl = document.getElementById("input-el");

// 3. input-btn ID'li butona erişim sağlanıyor ve bu buton inputBtn değişkenine atanıyor.
const inputBtn = document.getElementById("input-btn");

// 4. ul-el ID'li elemente erişim sağlanıyor ve bu element ulEl değişkenine atanıyor.
const ulEl = document.getElementById("ul-el");

// 5. inputBtn (buton) üzerine bir tıklama olayı ekleniyor.
inputBtn.addEventListener("click", function() {
    // 6. inputEl'den alınan değer (URL) myLeads dizisine ekleniyor.
    myLeads.push(inputEl.value);
    
    // 7. inputEl'in değeri temizleniyor, böylece kullanıcı yeni bir URL girebilir.
    inputEl.value = "";
    
    // 8. renderLeads fonksiyonu çağrılarak, eklenen URL'ler listeleniyor.
    renderLeads();
});

// 9. renderLeads fonksiyonu tanımlanıyor.
function renderLeads() {
    // 10. Boş bir string oluşturuluyor. Bu string, listeye eklenecek URL'leri içerecek.
    let listItems = "";
    
    // 11. myLeads dizisindeki her bir URL için döngü oluşturuluyor.
    for (let i = 0; i < myLeads.length; i++) {
        // 12. Template literals kullanılarak, her URL için bir list item oluşturuluyor.
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
            </li>`;
    }
    
    // 13. oluşturulan listItems string'i ulEl (sırasız liste) elementine atanıyor.
    ulEl.innerHTML = listItems;
}

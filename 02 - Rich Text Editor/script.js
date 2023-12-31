// HTML'de belirli sınıflara veya ID'lere sahip elementlere erişim sağlamak için değişkenler tanımlanıyor.
let optionsButtons = document.querySelectorAll(".option-button"); // Tüm "option-button" sınıfına sahip elementleri seçer.
let advancedOptionButton = document.querySelectorAll(".adv-option-button"); // Tüm "adv-option-button" sınıfına sahip elementleri seçer.
let fontName = document.getElementById("fontName"); // "fontName" ID'li elementi seçer.
let fontSizeRef = document.getElementById("fontSize"); // "fontSize" ID'li elementi seçer.
let writingArea = document.getElementById("text-input"); // "text-input" ID'li elementi seçer.
let linkButton = document.getElementById("createLink"); // "createLink" ID'li elementi seçer.
let alignButtons = document.querySelectorAll(".align"); // Tüm "align" sınıfına sahip elementleri seçer.
let spacingButtons = document.querySelectorAll(".spacing"); // Tüm "spacing" sınıfına sahip elementleri seçer.
let formatButtons = document.querySelectorAll(".format"); // Tüm "format" sınıfına sahip elementleri seçer.
let scriptButtons = document.querySelectorAll(".script"); // Tüm "script" sınıfına sahip elementleri seçer.

// Bu değişkenler, belirli özelliklere sahip HTML elementlerine erişmek için kullanılır. Örneğin, belirli bir metin alanında yazı yazarken kullanılan "writingArea" değişkeni metin alanına erişim sağlar. Benzer şekilde, farklı butonları veya araçları kontrol etmek veya işlem yapmak için diğer değişkenler kullanılır.
// Bir font listesi oluşturuluyor.

let fontList = [
    "Arial",             // Arial fontu
    "Verdana",           // Verdana fontu
    "Times New Roman",   // Times New Roman fontu
    "Garamond",          // Garamond fontu
    "Georgia",           // Georgia fontu
    "Courier New",       // Courier New fontu
    "Cursive",           // El yazısı (Cursive) fontu
];

// Bu dizi, muhtemelen bir kullanıcının veya bir uygulamanın kullanıcının seçebileceği veya belirli bir yazı alanında kullanabileceği farklı font seçeneklerini içerir.
// "intializer" adında bir fonksiyon tanımlanıyor.
const intializer = () => {
    // Farklı buton türleri için belirli işlevleri gerçekleştiriyor.
    highlighter(alignButtons, true);     // Align (hizalama) butonları için vurgulama yapar.
    highlighter(spacingButtons, true);   // Spacing (aralık) butonları için vurgulama yapar.
    highlighter(formatButtons, false);   // Format butonları için vurgulama yapmaz.
    highlighter(scriptButtons, true);    // Script (betik) butonları için vurgulama yapar.

    // "fontList" dizisindeki her bir font için bir seçenek oluşturarak "fontName" elementine ekler.
    fontList.map((value) => {
        let option = document.createElement("option");  // Yeni bir <option> elementi oluşturur.
        option.value = value;                           // Oluşturulan <option> elementinin değerini belirler.
        option.innerHTML = value;                       // Oluşturulan <option> elementinin içeriğini belirler.
        fontName.appendChild(option);                   // Oluşturulan <option> elementini "fontName" elementine ekler.
    });
};

    // Bu fonksiyon, belirli işlemleri başlatmak veya sayfa yüklendiğinde bazı başlangıç ayarlarını gerçekleştirmek için kullanılabilir.
    // 1'den 7'ye kadar olan sayıları içeren bir döngü başlatılıyor.
    for (let index = 1; index <= 7; index++) {
    let option = document.createElement("option");  // Yeni bir <option> elementi oluşturuluyor.
    option.value = i;                               // Oluşturulan <option> elementinin değeri belirleniyor.
    option.innerHTML = i;                           // Oluşturulan <option> elementinin içeriği belirleniyor.
    fontSizeRef.appendChild(option);                // Oluşturulan <option> elementi "fontSizeRef" seçim listesine ekleniyor.
}

fontSizeRef.value = 3;  // Varsayılan olarak seçili olan değeri 3 olarak ayarlar.

// Bu kod parçası, belirli bir metin boyutu seçimini kullanıcının seçebilmesi için farklı boyut seçeneklerini sunar ve varsayılan olarak 3'ü seçer.

fontList.map((value)=>{
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
});

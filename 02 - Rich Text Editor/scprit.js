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
fontList.map((value)=>{
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
});

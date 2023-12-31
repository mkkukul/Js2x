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
const intializer = () => {
    // Bu fonksiyon, editörün başlangıç ayarlarını yapmak için kullanılır.

    highlighter(alignButtons, true);
    // 'highlighter' fonksiyonunu çağırarak 'alignButtons' grubundaki butonlara vurgulama özelliği ekler. 'true', vurgulamanın aktif olmasını belirtir.

    highlighter(spacingButtons, true);
    // 'spacingButtons' grubundaki butonlara vurgulama özelliği ekler. 'true', vurgulamanın aktif olmasını belirtir.

    highlighter(formatButtons, false);
    // 'formatButtons' grubundaki butonlardaki vurgulamayı kaldırır. 'false', vurgulamanın pasif olmasını belirtir.

    highlighter(scriptButtons, true);
    // 'scriptButtons' grubundaki butonlara vurgulama özelliği ekler. 'true', vurgulamanın aktif olmasını belirtir.

    // 'fontList' dizisindeki her bir font ismi için bir seçenek oluşturur.
    fontList.map((value) => {
        let option = document.createElement("option"); // Yeni bir seçenek elementi oluşturur.
        option.value = value; // Seçeneğin değerini belirler.
        option.innerHTML = value; // Seçeneğin gösterileceği içeriği belirler.
        fontName.appendChild(option); // Bu seçeneği 'fontName' adlı dropdown listesine ekler.
    });

    // 1'den 7'ye kadar olan sayılar için bir seçenek oluşturur.
    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option"); // Yeni bir seçenek elementi oluşturur.
        option.value = i; // Seçeneğin değerini belirler.
        option.innerHTML = i; // Seçeneğin gösterileceği içeriği belirler.
        fontSizeRef.appendChild(option); // Bu seçeneği 'fontSizeRef' adlı dropdown listesine ekler.
    }

    // Başlangıçta 'fontSizeRef' dropdown listesinde 3. seçeneği seçer.
    fontSizeRef.value = 3;
};
const modifyText = (command, defaultUi, value) => {
    // 'modifyText' isimli fonksiyon, belirtilen komutu (command) belirli bir metin üzerinde çalıştırmak için kullanılır.
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    // 'optionsButtons' listesindeki her bir butona bir 'click' event listener eklenir.
    button.addEventListener("click", () => {
        // Butona tıklandığında, belirtilen komutu ve değeri kullanarak metni değiştirir.
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    // 'advancedOptionButton' listesindeki her bir butona bir 'change' event listener eklenir.
    button.addEventListener("change", () => {
        // Butonun değeri değiştiğinde, belirtilen komutu ve yeni değeri kullanarak metni değiştirir.
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    // 'linkButton' adlı butona bir 'click' event listener eklenir.
    let userLink = prompt("Enter a URL?"); // Kullanıcıdan bir URL girmesi istenir.

    // Girilen URL'nin "http" ile başlayıp başlamadığını kontrol eder.
    if (/http/i.test(userLink)) {
        // Eğer URL "http" ile başlıyorsa, bu URL'yi kullanarak bir bağlantı ekler.
        modifyText(linkButton.id, false, userLink);
    } else {
        // Eğer URL "http" ile başlamıyorsa, URL'yi bu formatla ekleyerek bir bağlantı oluşturur.
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});
const highlighter = (className, needsRemoval) => {
    // 'highlighter' adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, belirli bir sınıf adına sahip butonlara vurgulama eklememizi sağlar.
    
    className.forEach((button) => {
        // Belirtilen sınıf adına sahip tüm elemanlara (butonlar) döngü yardımıyla erişiyoruz.
        
        button.addEventListener("click", () => {
            // Her bir butona tıklanıldığında tetiklenecek olan olayı tanımlıyoruz.
            
            if (needsRemoval) {
                // 'needsRemoval' parametresi, vurgulamanın kaldırılması gerekip gerekmediğini kontrol eder.
                
                let alreadyActive = false;
                // Eğer buton zaten "active" (aktif) durumdaysa, bu durumu kontrol etmek için bir değişken oluşturuyoruz.
                
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                // Eğer buton zaten "active" sınıfını içeriyorsa, bu bilgiyi değişkene atıyoruz.
                
                highlighterRemover(className);
                // Eğer vurgulamanın kaldırılması gerekiyorsa, tüm belirtilen sınıfa sahip butonlardaki vurgulamayı kaldıran bir fonksiyonu çağırıyoruz.
                
                if (!alreadyActive) {
                    button.classList.add("active");
                }
                // Eğer buton zaten aktif değilse, ona "active" sınıfını ekleyerek vurgulama yapılır.
                
            } else {
                button.classList.toggle("active");
            }
            // Eğer 'needsRemoval' false ise, butonun aktiflik durumunu tersine çevirir. Yani eğer buton aktifse, inaktif hale getirir ve tam tersi.
            
        });
    });
};

const highlighterRemover = (className) => {
    // 'highlighterRemover' adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, belirli bir sınıf adına sahip tüm butonlardan vurgulamayı kaldırır.
    
    className.forEach((button) => {
        // Belirtilen sınıf adına sahip tüm elemanlara (butonlar) döngü yardımıyla erişiyoruz.
        
        button.classList.remove("active");
        // Her bir butondan "active" (aktif) sınıfını kaldırarak vurgulamayı kaldırıyoruz.
    });
};

window.onload = intializer();
// Sayfa yüklendiğinde, belirtilen bir başlatıcı fonksiyonunu çalıştırarak bazı özellikleri başlatıyoruz. Bu, belki de sayfa yüklendiğinde özelliklerin otomatik olarak etkinleştirilmesini sağlar.

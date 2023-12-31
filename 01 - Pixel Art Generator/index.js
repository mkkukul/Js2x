// HTML'de belirli elementlere erişim sağlamak için değişkenler tanımlanıyor.
let container = document.querySelector(".container"); // Çizim alanının seçicisi
let gridButton = document.getElementById("submit-grid"); // Grid oluşturma butonu
let clearGridButton = document.getElementById("clear-grid"); // Grid'i temizleme butonu
let gridWidth = document.getElementById("width-range"); // Grid genişliği için input
let gridHeight = document.getElementById("height-range"); // Grid yüksekliği için input
let colorButton = document.getElementById("color-input"); // Renk seçimi için input
let eraseBtn = document.getElementById("erase-btn"); // Silgi butonu
let paintBtn = document.getElementById("paint-btn"); // Boyama butonu
let widthValue = document.getElementById("width-value"); // Grid genişliği değerini gösteren element
let heightValue = document.getElementById("height-value"); // Grid yüksekliği değerini gösteren element

// Farklı cihaz etkileşimleri için olaylar tanımlanıyor (fare ve dokunmatik).
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = ""; // Kullanıcının cihaz türünü belirlemek için bir değişken tanımlanıyor.

let draw = false; // Kullanıcının çizim yapma durumunu kontrol etmek için bir değişken
let erase = false; // Kullanıcının silme işlevini kontrol etmek için bir değişken

// Kullanıcının cihazının dokunmatik olup olmadığını kontrol eden bir fonksiyon.
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice(); // Cihaz türünü belirlemek için fonksiyonu çağırma

// Grid oluşturma butonuna tıklanıldığında çalışacak olan fonksiyon.
gridButton.addEventListener("click", () => {
    container.innerHTML = ""; // Önceki grid içeriğini temizle
    let count = 0; // Grid hücrelerinin sayısını saymak için bir sayaç
    // Belirlenen genişlik ve yükseklikte grid oluşturma döngüsü
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2; // Sayaç değerini artırma
        let div = document.createElement("div"); // Yeni bir satır oluşturma
        div.classList.add("gridRow"); // Satır için sınıf eklemek
        // Belirlenen genişlikte sütun (hücre) oluşturma döngüsü
        for (let j = 0; j < gridWidth.value; j++) {
            count += 2; // Sayaç değerini artırma
            let col = document.createElement("div"); // Yeni bir sütun oluşturma
            col.classList.add("gridCol"); // Sütun için sınıf eklemek
            col.setAttribute("id", `gridCol${count}`); // Sütuna bir ID atama
            // Sütuna tıklanıldığında çizim veya silme işlevi eklemek
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });
            // Sütunda hareket ederken işlev eklemek
            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId); // Çizim veya silme kontrol fonksiyonunu çağırmak
            });
            // Sütundan ayrıldığında çizim işlevini kapatma
            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });
            div.appendChild(col); // Sütunu satıra ekleme
        }
        container.appendChild(div); // Satırı ana konteynıra ekleme
    }
});

// Çizim veya silme kontrolünü sağlayan fonksiyon
function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol"); // Tüm grid sütunlarını seçme
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorButton.value;
            } else if (draw && erase) {
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

// Grid'i temizlemek için butona tıklanıldığında çalışacak fonksiyon
clearGridButton.addEventListener("click", () => {
    container.innerHTML = "";
});

// Silgi butonuna tıklanıldığında çalışacak fonksiyon
eraseBtn.addEventListener("click", () => {
    erase = true;
});

// Boyama butonuna tıklanıldığında çalışacak fonksiyon
paintBtn.addEventListener("click", () => {
    erase = false;
});

// Grid genişliği değişikliğini göstermek için olay dinleyici
gridWidth.addEventListener("input", () => {
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

// Grid yüksekliği değişikliğini göstermek için olay dinleyici
gridHeight.addEventListener("input", () => {
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

// Sayfa yüklendiğinde grid genişlik ve yükseklik değerlerini sıfırlama
window.onload = () => {
    gridHeight.value = 0;
    gridWidth.value = 0;
};

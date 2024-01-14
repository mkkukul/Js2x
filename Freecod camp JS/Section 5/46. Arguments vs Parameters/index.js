// Fonksiyonlar tanımlanırken parametreler belirtilir.
// greetUser fonksiyonu, greeting ve name adında iki parametre alır.
function greetUser(greeting, name) { 
    // Fonksiyon içindeki işlem: welcomeEl'in içeriğini parametrelerle günceller.
    welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

// greetUser fonksiyonu çağrılırken, hi değişkeni greeting'e, "James" string'i ise name'e atanır.
let hi = "Howdy";
greetUser(hi, "James");

// add fonksiyonu, num1 ve num2 adında iki parametre alır.
// Fonksiyon, parametrelerin toplamını döndürür.
function add(num1, num2) {
    return num1 + num2;
}

// add fonksiyonu çağrılırken, 3 num1'e, 4 ise num2'ye atanır ve sonuç elde edilir.
add(3, 4);

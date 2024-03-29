let name = 42; // Bir sayı olan 'name' değişkeni tanımla
let greeting = "Hi, my name is "; // Bir selamlama ifadesini içeren 'greeting' değişkeni tanımla
let myGreeting = greeting + name; // 'greeting' ile 'name' değişkenini birleştirerek yeni bir mesaj oluştur

console.log(myGreeting); // Oluşturulan selamlama mesajını konsola yazdır

let points = "4"; // Bir dize olarak puanları temsil eden 'points' değişkeni tanımla
let bonusPoints = "10"; // Bir dize olarak bonus puanları temsil eden 'bonusPoints' değişkeni tanımla
let toplam = points + bonusPoints; // 'points' ve 'bonusPoints' değişkenlerini birleştirerek yeni bir dize oluştur

console.log(toplam); // Oluşturulan dizeyi konsola yazdır

function toplam() {
  toplam = points + bonusPoints; // 'points' ve 'bonusPoints' değişkenlerini birleştirerek yeni bir dize oluştur
  console.log(toplam); // Oluşturulan dizeyi konsola yazdır
}

// Bu kod öncelikle bir sayı ve bir dizeyi birleştirerek bir selamlama mesajı oluşturur. Daha sonra, iki dizeyi birleştirerek toplam bir dize oluşturur. Son olarak, bir fonksiyon tanımlar ve bu fonksiyon, iki dizeyi birleştirerek bir dize oluşturur ve bunu konsola yazdırır. Ancak, bu kodun işlevselliği çakışır, çünkü 'toplam' adında bir değişken ve 'toplam' adında bir fonksiyon tanımlanmıştır. Bu nedenle, fonksiyonun adını değiştirmek veya değişkenin adını değiştirmek, bu çakışmayı düzeltebilir.


// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = "4"
// let bonusPoints = "10"
// let toplam = points+bonusPoints
// console.log(toplam)
// function toplam(){
    // toplam = points + bonusPoints
    // console.log(toplam)
// }

// let totalPoints = points + bonusPoints

console.log(4 + 5) 
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")
console.log(4 + 5):

// Bu ifade 4 ve 5'in toplamını hesaplar.
// Sonuç olarak, 9'u konsola yazdırır.
// console.log("2" + "4"):
// 
// Bu ifade "2" ve "4" dize değerlerini birleştirir.
// Sonuç olarak, "24" dizesini konsola yazdırır.
// console.log("5" + 1):
// 
// Bu ifade "5" dizesi ile 1 sayısını birleştirir.
// JavaScript otomatik olarak sayıyı bir dizeye dönüştürerek "51" dizesini oluşturur.
// Sonuç olarak, "51" dizesini konsola yazdırır.
// console.log(100 + "100"):
// 
// Bu ifade 100 sayısı ile "100" dizesini birleştirir.
// JavaScript otomatik olarak sayıyı bir dizeye dönüştürerek "100100" dizesini oluşturur.
// Sonuç olarak, "100100" dizesini konsola yazdırır.
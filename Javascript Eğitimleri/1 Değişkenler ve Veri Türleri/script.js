// const  isim = "Malik"
// let lastName = " Hard";
// lastName = "test2";
// console.log(lastName)
// 
// String
// const value = "Name" 
// Number
// const value2 = 34
// String
// const value3 = "34"
// Boolean
// const value4 = true
// ! Array
// const value5 = [ "isim", "Soyisim", "30", 58]
// const value = {
    // isim : "mjk",
    // soyisim : "yjk",
    // diller : ["İngilizce", ]
// }
// 
// const valueX = "34"
// const valueX2 = 34
// console.log(typeof Number(valueX2))
// console.log(typeof String(valueX2))
// const x = 5
// const y = 6
// const total = x+y
// console.log(total) 
// const tut = y-x
// console.log(tut)
// const carpma= x*y
// console.log(carpma)
// const m = 30
// const bolme = m/y
// console.log(bolme)
// const n = 28
// const fix = n%x
// console.log(fix)
// const ussu = x**(y-x)
// console.log(ussu)
// let value1 = 3
// let value2 = 4
// let tre = ( value1>value2)
// console.log(tre)
// let ert = 6
// let ert1 ="6"
// let mx = (ert == ert1)
// let nx = (ert === ert1)
// console.log(mx)
// console.log(nx)
// let tew = 44
// let wer = 55
// let tyr = (tew != wer)
// console.log(tyr)
// let wert = 44
// let werz = 44
// let qwe = (wert != werz)
// console.log(qwe)
//
let value1 =22
let value2 = 223
  if(value1> value2){
  console.log(hkjsahd)
  }else if (value1>=value2){
    console.log("eşit veya büyük")
  }else{
    console.log("büyük değil")
  }

//  ?     
let sayi = 10;
let sonuc = (sayi > 5) ? "Büyük" : "Küçük";
console.log(sonuc); // Bu örnekte "Büyük" çıktısı alınır.
function topla(a, b, c) {
    // c parametresi opsiyonel, eğer yoksa varsayılan değeri 0 olarak alır.
    c = c || 0;
    return a + b + c;
}

console.log(topla(2, 3));      // 5
console.log(topla(2, 3, 5));   // 10
let ogrenci = {
    ad: "Ahmet",
    bilgiler: {
        yas: 20,
        okul: {
            ad: "Lise",
            bolum: "Matematik"
        }
    }
};

// Eğer bir özellik yoksa undefined döner, hata almazsınız.
let bolum = ogrenci?.bilgiler?.okul?.bolum;
console.log(bolum); // Matematik

// || (Veya - OR) Operatörü Kullanımı
let x = true;
let y = false;

// Eğer x veya y doğru ise, bu koşul true olur.
// Ayrıca, || operatörü soldaki ifadenin doğru olması durumunda sağdaki ifadeye bile bakmadan true döndürür (kısa devre değerlendirme).

let resultOr = x || y;
console.log("Veya (||) Operatörü: ", resultOr); // Bu durumda, "x veya y doğru." yazdırılır.

// && (Ve - AND) Operatörü Kullanımı
let a = true;
let b = false;

// Eğer a ve b ikisi de doğru ise, bu koşul true olur.
// Ayrıca, && operatörü soldaki ifadenin false olması durumunda sağdaki ifadeye bile bakmadan false döndürür (kısa devre değerlendirme).

let resultAnd = a && b;
console.log("Ve (&&) Operatörü: ", resultAnd); // Bu durumda, "a veya b yanlış." yazdırılır.

// while Döngüsü Kullanımı
let counterWhile = 0; // counterWhile değişkenini başlangıç değeriyle tanımla

// while döngüsü: counterWhile değeri 5'ten küçük olduğu sürece devam eder
while (counterWhile < 5) {
    console.log("while Döngüsü - counterWhile: ", counterWhile);
    counterWhile++; // counterWhile'ı artır
}
console.log("while Döngüsü Bitti\n");

// for Döngüsü Kullanımı
// i'yi 0'dan başlat; i'nin değeri 5'ten küçük olduğu sürece devam et; her adımda i'yi 1 artır
for (let i = 0; i < 5; i++) {
    console.log("for Döngüsü - i: ", i);
}
console.log("for Döngüsü Bitti");
// while Döngüsü Açıklamaları:
// 
// counterWhile değişkeni başlangıç değeriyle tanımlanır.
// while döngüsü, counterWhile değeri 5'ten küçük olduğu sürece devam eder.

// Döngü içinde counterWhile değeri konsola yazdırılır ve her adımda counterWhile değeri bir artırılır.
// for Döngüsü Açıklamaları:
// 
// for döngüsü, i değişkeni 0'dan başlatılır.
// Döngü, i değeri 5'ten küçük olduğu sürece devam eder.
// Her adımda i değeri konsola yazdırılır ve her adımda i değeri bir artırılır.
// do-while Döngüsü Kullanımı
let sayac = 0; // sayac değişkenini başlangıç değeriyle tanımla

// do-while döngüsü: do bloğu içindeki kod en az bir kez çalıştırılır, sonra while koşulu kontrol edilir
do {
    console.log("do-while Döngüsü - Sayac: ", sayac); // do bloğu içindeki kod
    sayac++; // sayac'ı bir artır
} while (sayac < 5); // while koşulu: sayac değeri 5'ten küçük olduğu sürece döngü devam eder

console.log("do-while Döngüsü Bitti");

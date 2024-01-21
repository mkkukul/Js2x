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

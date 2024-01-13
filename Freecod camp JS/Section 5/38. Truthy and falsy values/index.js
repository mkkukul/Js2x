
console.log(  Boolean("")   ) //
console.log(  Boolean("0")  ) // 
console.log(  Boolean(100)  ) //
console.log(  Boolean(null) ) //
console.log(  Boolean([0])  ) //
console.log(  Boolean(-0)   ) //
console.log( Boolean("") );      // false - Boş bir string ("") false olarak değerlendirilir.
console.log( Boolean("0") );     // true - String "0" bir değer taşır ve bu nedenle true olarak değerlendirilir.
console.log( Boolean(100) );     // true - Sayısal bir değer olan 100, bir değer taşıdığı için true olarak değerlendirilir.
console.log( Boolean(null) );    // false - null, boş bir değerdir ve bu nedenle false olarak değerlendirilir.
console.log( Boolean([0]) );     // true - Dizi, içinde eleman (0) olduğu için true olarak değerlendirilir.
console.log( Boolean(-0) );      // false - -0, 0'ın negatif bir değeri olmasına rağmen, 0 olarak değerlendirilir ve false olarak döner.
let currentViewers = ["jane"]
console.log(currentViewers[5])
// 1. Null: Bilinçli boşluk
let kullanici = null; // Kullanıcı bilgisi henüz atanmamış, bilinçli olarak boş bırakılmış.
console.log("Kullanıcı:", kullanici); // Output: null

// 2. Undefined: Tanımsız değer
let yas; // Yaş değişkeni atanmamış, varsayılan olarak undefined olacak.
console.log("Yaş:", yas); // Output: undefined

// 3. NaN (Not-a-Number): Geçersiz sayısal işlem
let toplamFiyat = "beş" * 10; // Geçersiz bir matematiksel işlem, çünkü "beş" sayısal bir değil.
console.log("Toplam Fiyat:", toplamFiyat); // Output: NaN

// Örnek Kullanım: Kullanıcı Bilgileri Kontrolü
if (kullanici === null) {
    console.log("Kullanıcı bilgisi eksik.");
} else {
    console.log("Kullanıcı adı:", kullanici.username);
}

if (yas === undefined) {
    console.log("Yaş bilgisi belirtilmemiş.");
} else {
    console.log("Yaş:", yas);
}

if (isNaN(toplamFiyat)) {
    console.log("Toplam fiyat geçerli bir sayı değil.");
} else {
    console.log("Toplam Fiyat:", toplamFiyat);
}

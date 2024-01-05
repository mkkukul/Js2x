// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
if (age <100){
    console.log("Not elegible")
} else if (age === 100){
    console.log("Here is your birthday card from the King!") 
} else {
    console.log ("Not elegible, you have already gotten one.")
}
// == operatörü: Kısmi eşleşme yapar.
// Eğer iki değer aynı tipe sahip değilse, JavaScript otomatik olarak tip dönüşümü yapar.
// Bu, beklenmeyen sonuçlara neden olabilir.
// 
//! console.log(5 == "5");   // true, tip dönüşümü yapılır, değerler eşleşir.
//? console.log(0 == false); // true, tip dönüşümü yapılır, değerler eşleşir.

// === operatörü: Tam eşleşme yapar.
// İki değerin hem türleri hem de değerleri aynı olmalıdır.

//! console.log(5 === "5");   // false, çünkü hem değerler hem de tipler farklı.
//? console.log(0 === false); // false, çünkü hem değerler hem de tipler farklı.

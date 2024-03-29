let age = 55

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("Ücretsiz");
} else if (age < 18) {
    console.log("Çocuk İndirimi");
} else if (age < 27) {
    console.log("Öğrenci İndirimi");
} else if (age < 67) {
    console.log("Tam Fiyat");
} else {
    console.log("Yaşlı İndirimi");
}


// !Eğer yaş 6'dan küçükse, ücretsiz olarak kabul edilir.
// !Eğer yaş 6 ile 18 arasındaysa, "Çocuk İndirimi" uygulanır.
// !Eğer yaş 18 ile 27 arasındaysa, "Öğrenci İndirimi" uygulanır.
// !Eğer yaş 27 ile 67 arasındaysa, tam fiyat alınır.
// !Eğer yaş 67'den büyükse, "Yaşlı İndirimi" uygulanır.
// !


// if(age < 6 ){
//     console.log("Free")
// } else if (age<18){
        // console.log("Child Discount")
// } else if (age<27){
        // console.log("Student Discount")
// } else if (age < 67){
        // console.log("full price")
// } else {
        // console.log("senior citizen discount")
// }
// 
// 
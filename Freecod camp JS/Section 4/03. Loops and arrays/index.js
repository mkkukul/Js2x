let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world");
// "Dünyanın en büyük 5 ülkesi" başlığını konsola yazdırır.

for (let i = 0; i < largeCountries.length; i++) {
    // largeCountries dizisinin her elemanını işlemek için bir döngü oluşturur.
    
    console.log("- " + largeCountries[i]);
    // Her döngü adımında, o anki dizinin elemanını konsola yazar.
    // "-" işareti ile başlatarak bir liste formatı oluşturur.
}



// console.log("The 5 largest countries in the world")
// for (let i = 0; i< largeCountries.length; i++){
    // console.log("- "+ largeCountries[i])
// }

let lapsCompleted = 0; // Yapılan tur sayısını tutan bir değişken oluştur

// Yapılan tur sayısını bir artırarak değiştiren bir fonksiyon oluştur
function incrementLapsCompleted() {
    lapsCompleted = lapsCompleted + 1; // lapsCompleted değişkenini bir artır
}

// Fonksiyonu üç kez çağırarak tur sayısını artır
incrementLapsCompleted(); // Birinci kez çağır
incrementLapsCompleted(); // İkinci kez çağır
incrementLapsCompleted(); // Üçüncü kez çağır

console.log(lapsCompleted); // Güncellenmiş tur sayısını konsola yazdır


// let lapsCompleted = 0

//  Create a function that increments the lapsCompleted variable with one
//  Run it three times
// function lapsXs (){
//     lapsCompleted = lapsCompleted + 1
// }
// lapsXs()
// lapsXs()
// lapsXs()
// console.log(lapsCompleted)
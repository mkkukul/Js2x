let myPoints = 3; // myPoints adında bir değişken oluşturulur ve başlangıçta 3 değeri atanır

// add3Points adında bir fonksiyon tanımlanır. Bu fonksiyon, myPoints değişkenine 3 puan ekler
function add3Points() {
    myPoints += 3;
}

// remove1Point adında bir fonksiyon tanımlanır. Bu fonksiyon, myPoints değişkeninden 1 puan çıkarır
function remove1Point() {
    myPoints -= 1;
}

// add3Points fonksiyonu üç kez çağrılır, böylece myPoints değişkenine toplam 9 puan eklenir
add3Points();
add3Points();
add3Points();

// remove1Point fonksiyonu iki kez çağrılır, böylece myPoints değişkeninden toplam 2 puan çıkarılır
remove1Point();
remove1Point();

// myPoints değişkeninin son değeri konsola yazdırılır, bu da 10 olmalıdır
console.log(myPoints); // 10




// let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
//  add/remove points to/from the myPoints variable
// function add3Points(){
//     myPoints += 3;
// }
// function remove1Point(){
//     myPoints-= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

//  Call the functions to that the line below logs out 10
// console.log(myPoints)
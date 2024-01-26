// Dizi Elemanlarına Erişim
let colors = ["red", "green", "blue"];

// Dizinin 2. index'indeki elemanı (üçüncü eleman) al
console.log(colors[2]); // "blue"

// Dizinin 1. index'indeki elemanı (ikinci eleman) al
console.log(colors.at(1)); // "green"


// Negatif Index Kullanımı
let numbers = [10, 20, 30];

// Dizinin son elemanını al (negatif index kullanımı)
console.log(numbers.at(-1)); // 30


// Dizi Birleştirme (concat)
let fruit = ["apple", "banana"];
let vegetable = ["carrot", "broccoli"];

// İki diziyi birleştir ve yeni bir dizi oluştur
let combined = fruit.concat(vegetable);
console.log(combined); // ["apple", "banana", "carrot", "broccoli"]


// Dizileri Birleştirme (concat)
let arr1 = [1, 2];
let arr2 = [3, 4];

// İki ayrı diziyi birleştir
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // [1, 2, 3, 4]


// Her Elemanın Belirli Bir Koşulu Sağlaması (every)
let numbers2 = [2, 4, 6, 8];

// Dizideki her elemanın çift olup olmadığını kontrol et
let isEven = numbers2.every((num) => {
    return num % 2 === 0;
});

// Eğer her eleman çiftse, sonuç true olur
console.log(isEven); // true

// Her Elemanın Belirli Bir Koşulu Sağlaması (every)
let words = ["hello", `world`, 'goodbye'];

// Dizideki her kelimenin uzunluğu 6'dan büyük mü diye kontrol et
let check = words.every((value) => {
    return value.length > 6;
});

// Eğer her kelimenin uzunluğu 6'dan büyükse, sonuç true olur
console.log(check); // false


// Belirli Aralıktaki Elemanları Değiştirme (fill)
let numbers4 = [1, 2, 3, 4, 5];

// 2. index'ten başlayarak 4. index'e kadar olan elemanları 0 ile doldur
numbers4.fill(0, 2, 4);

console.log(numbers4); // [1, 2, 0, 0, 5]

// Belirli Bir Değeri Doldurarak Yeni Bir Dizi Oluşturma (fill)
let arty = new Array(5);

// 5 elemanlı bir dizi oluştur ve tüm elemanları 'boston' ile doldur
arty.fill('boston');
console.log(arty); // ['boston', 'boston', 'boston', 'boston', 'boston']


// Belirli Koşulu Sağlayan Elemanları Seçme (filter)
let numberT = [1, 2, 3, 4, 5];

// Sadece çift sayıları seç
let evenNuB = numberT.filter((value) => {
    return value % 2 === 0;
});

console.log(evenNuB); // [2, 4]


let wordE = ['apple', 'orange', 'banana'];

// Uzunluğu 6'dan küçük olan kelimeleri seç
let shortW = wordE.filter((value) => {
    return value.length < 6;
});

console.log(shortW); // ['apple']


// Belirli Bir Koşulu Sağlayan İlk Elemanı Bulma (find)
let numbersXc = [1, 2, 3, 4, 5];

// 3'ten büyük ilk sayıyı bul
let found = numbersXc.find((value) => {
    return value > 3;
});

console.log(found); // 4

// Belirli Bir Koşulu Sağlayan İlk Elemanı Bulma (find)
let fruits = ['apple', ' orange', 'banana'];

// 'banana' kelimesini içeren ilk elemanı bul
let found2 = fruits.find((value) => {
    return value === 'banana';
});

console.log(found2); // 'banana'


// Belirli Bir Koşulu Sağlayan Elemanın İndeksini Bulma (findIndex)
let numbersXc2 = [1, 2, 3, 4, 5];

// Değeri 2 olan ilk elemanın indeksini bul
let index2 = numbersXc2.findIndex((value) => {
    return value === 2;
});

console.log(index2); // 1

// Değeri 2'den büyük ilk elemanın indeksini bul
let index3 = numbersXc2.findIndex((value) => {
    return value > 2;
});

console.log(index3); // 2


// Belirli Bir Elemanın İndeksini Bulma (findIndex)
let fruitsTs = ['apple', ' orange', 'banana'];

// 'orange' kelimesinin indeksini bul
let findIndexOfBanana = fruitsTs.findIndex((value) => {
    return value === ' orange';
});

console.log(findIndexOfBanana); // 1


// Gömülü Diziyi Düzleştirme (flat)
let nestedArr = [1, [2, [3, [4]]]];

// Tüm iç içe geçmiş dizileri düzleştir
let flatArrt = nestedArr.flat(Infinity);

console.log(flatArrt); // [1, 2, 3, 4]


// Her Eleman Üzerinde İşlem Yapma (forEach)
let nus = [1, 2, 3, 4, 5];

// Her elemanı iki ile çarp ve konsola yazdır
nus.forEach((value) => {
    console.log(value * 2);
});


// Çarp ve Topla Fonksiyonu
function carpVeTopla() {
    let toplam = 0;

    for (let i = 1; i <= 5; i++) {
        // Her bir sayıyı ayrı çarp ve toplama ekle
        toplam += i * 2;
    }

    return toplam;
}

// Fonksiyonu çağır ve sonucu yazdır
let sonuc = carpVeTopla();
console.log("1'den 5'e kadar olan sayıları ayrı 2 ile çarpıp toplamı:", sonuc);
 let colorsX = [ 'red', 'green','blue' ]
//  colorsX.forEach((value), index=>{
    // console.log(`colorX at index ${index}: ${value}`)
//  })
//  let numter = [1,2,3,4,5]
//  let istry = numter.includes(7)
//  console.log(istry)
//? Array POp

// pop Metodu - Dizinin Son Elemanını Kaldırma
let numbers = [1, 2, 3, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]

// pop metodu, dizinin son elemanını kaldırır ve kaldırılan elemanı döndürür
let removedItem = numbers.pop();

console.log('Son eleman: ', removedItem); // Son eleman: 5

console.log(numbers); // [1, 2, 3, 4]


// reduce Metodu - Dizi Elemanlarını Toplama
let numbersXcvb = [1, 2, 3, 4, 5];

// reduce metodu, dizinin elemanlarını toplar
let sumer = numbersXcvb.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log(sumer); // 15


// reduce Metodu - Dizi Elemanlarını Birleştirme
let wordsX = ['hello', 'world', 'this', 'is', 'a', 'test'];

// reduce metodu, dizinin elemanlarını birleştirir
let resultXc = wordsX.reduce((accumulator, current) => {
    return accumulator + ' ' + current;
}, '');

console.log(resultXc); // 'hello world this is a test'


let numtersTr = [1,2,3,4,5]
// let reverse = numtersTr.reverse();
// console.log(reverse)
let sliceNy =numbers.slice(1,4)
console.log(sliceNy)

// array.slice()
let numbersTrxer = [1, 2, 3, 4, 5];

// numbersTrxer dizisinden 1. index'ten başlayarak 2 elemanı kaldır ve removedElements'e ata
let removedElements = numbersTrxer.splice(1, 2);

// Kaldırılan elemanları yazdır
console.log(removedElements); // [2, 3]

// Kalan diziyi yazdır
console.log(numbersTrxer); // [1, 4, 5]


let colorsXs = ['red', 'green', 'blue'];

// colorsXs dizisinden 1. index'teki 1 elemanı kaldır, yerine 'yellow' ekleyerek removedColor'a ata
let removedColor = colorsXs.splice(1, 1, 'yellow');

// Kaldırılan elemanı ve eklenen rengi yazdır
console.log(removedColor); // ['green']
console.log(colorsXs); // ['red', 'yellow', 'blue']

let numbersX2 = [1, 2, 3, 4, 5];

// numbersX2 dizisinde en az bir çift sayı var mı?
let hasEvenNumber = numbersX2.some((value) => {
    return value % 2 === 0;
});

// Sonucu yazdır
console.log(hasEvenNumber); // true
// numbersX2 dizisinde en fazla 2 çift sayı var mı?
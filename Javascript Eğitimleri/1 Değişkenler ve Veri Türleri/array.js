let colors = ["red", "green", "blue"]
console.log(colors[2]) // 
console.log(colors.at(1))
let numbers = [10, 20, 30];
console.log(numbers.at(-1)) // son değeri alır (30)
// array.concat ()
let fruit = ["apple", "banana"]
let vegetable = ["carrot", "broccoli"];
let combined = fruit.concat(vegetable)
console.log(combined)

let arr1 = [1,2]
let arr2 = [3,4]
let mergedArray = arr1.concat(arr2)
console.log(mergedArray)

let numbers2 = [2,4,6,8]
let isEven = numbers2.every((num)=>{
    return num %2 === 0;
})

console.log(isEven)
let words = [ "hello", `world`, 'goodbye']
let check = words.every((value)=>{
    return value.length > 6
})
console.log(check)
// array FileList add 0 from 2 to 4
let numbers4 = [1,2,3,4,5]
numbers4.fill(0,2,4);
console.log(numbers4)
let arty = new Array(5) // 5 adet yazdırır
arty.fill('boston')
console.log(arty)
// array filter
let  numberT = [1,2,3,4,5]
let  evenNuB = numberT.filter((value)=>{
    return value %2 === 0
} 
)  
console.log(evenNuB)

let wordE = [ 'apple', ' orange', 'banana']
let shortW = words.filter((value)=>{
    return value.length < 6
} );
console.log(shortW)

// array find 
let numbersXc = [1,2,3,4,5]
let found = numbersXc.find((value)=>{
    return value > 3
})
 
console.log(found)
let fruits = [ 'apple', ' orange', 'banana']
let found2 = fruits.find((value)=>{
    return value === 'banana'
});

console.log(found2)
let numbersXc2 = [1,2,3,4,5]
let index3 = numbersXc2.findIndex((value)=>{
    return value > 2;

})
let index2 = numbersXc2.findIndex((value)=>{
    return value === 2;

})
console.log(index2)

let fruitsTs = [ 'apple', ' orange', 'banana']
let findIndexOfBanana = fruitsTs.findIndex((value)=>{
    return value ===' orange';
})
console.log(findIndexOfBanana)
let nestedArr = [ 1,[2, [3,[4]]]]
let flatArrt = nestedArr.flat(Infinity)
console.log(flatArrt)
let nus = [1,2,3,4,5]
nus.forEach((value)=>{
    console.log(value*2)
})
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
 colorsX.forEach((value), index=>{
    console.log(`colorX at index ${index}: ${value}`)
 })
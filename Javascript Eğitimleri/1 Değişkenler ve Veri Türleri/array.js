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
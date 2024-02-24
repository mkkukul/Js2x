let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop()
largeCountries.push("Pakistan")

largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

// largeCountries.pop(): largeCountries dizisinin sonundaki elemanı çıkarır. Bu işlem, dizinin sonundaki ülkeyi kaldırır.
// 
//  largeCountries.push("Pakistan"): largeCountries dizisinin sonuna "Pakistan" adlı bir ülke ekler. Bu işlem, dizinin sonuna yeni bir ülke ekler.
// 
//  largeCountries.shift(): largeCountries dizisinin başındaki elemanı çıkarır. Bu işlem, dizinin başındaki ülkeyi kaldırır.
// 

//!  largeCountries.unshift("China"): largeCountries dizisinin başına "China" adlı bir ülke ekler. Bu işlem, dizinin başına yeni bir ülke ekler.
// 

//! console.log(largeCountries): Değiştirilmiş largeCountries dizisini konsola yazdırır. Bu işlem, dizinin güncellenmiş halini görüntüler.
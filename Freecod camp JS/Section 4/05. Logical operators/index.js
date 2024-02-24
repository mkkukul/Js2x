let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

// dayOfMonth.pop()
// dayOfMonth.push(31)
if( dayOfMonth === 13 && weekday === "Friday"  ){
    console.log("😱")
}else if (dayOfMonth < 13 ){
    console.log("😊")
}else if ( 13 < dayOfMonth) {
    console.log("🥹")
}

if (dayOfMonth === 13 && weekday === "Friday"): Eğer ayın günü 13 ise ve gün "Cuma" ise, yani 13'üncü gün Cuma gününe denk geliyorsa, korkutucu bir emoji olan 😱'yi konsola yazdırır.

else if (dayOfMonth < 13): Eğer ayın günü 13'ten küçükse, yani 13'üncü günden önceyse, mutlu bir emoji olan 😊'yi konsola yazdırır.

else if (13 < dayOfMonth): Eğer ayın günü 13'ten büyükse, yani 13'üncü günden sonraysa, üzgün bir emoji olan 🥹'yi konsola yazdırır.

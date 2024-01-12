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


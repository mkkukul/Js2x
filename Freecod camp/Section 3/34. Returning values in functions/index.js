let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        console.log(player1Time)
    } else if (player2Time < player1Time) {
        console.log(player2Time)
    } else {
        console.log(player1Time)
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function getFastestRaceTime1() {
    if (player1Time < player2Time) {
        return player1Time;  // Değer döndürülür.
    } else if (player2Time < player1Time) {
        return player2Time;  // Değer döndürülür.
    } else {
        return player1Time;  // Değer döndürülür.
    }
}

let fastestRace1 = getFastestRaceTime1();  // Fonksiyon çağrılır ve değeri döndürülür.
console.log(fastestRace1);  // Döndürülen değer yazdırılır.


// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime(){
    return player1Time + player2Time;
}
let totalTime = getTotalRaceTime()
console.log(totalTime)


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

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out




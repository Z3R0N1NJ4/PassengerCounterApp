
//document.getElementById("count-el").innerText = 5
//Create variable------------------------------------------->

// let count = 0

// console.log(count)

//1. create a variable, myAge, and set it's value to your age.

// let myAge = 25

//2. log the myAge variable to the console.

// console.log(myAge)

//Mathematical operations------------------------------------------->

// let count = 5 + 7

// console.log(count)

//value in JS

// let firstBatch = 5

// let secondBatch = 7

// let count = firstBatch + secondBatch
// console.log(count)

//1 create two var, myAge and humanDogRatio = 1 : 7
//2 Multiply the two together and store the result in myDogAge 
//3 Log myDogAge to the console

// let myAge = 25 //my method

// let myDogAge = myAge * 7

// console.log(myDogAge)

// let myAge = 25 //proper method
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// Reassigning & incrementing------------------------------------------->

// let count = 5

// count = count + 3
// console.log(count)

//Create variable bonusPoint at 50, initialize, increase it to 100
//decrease it down to 25, increase to 70 again.
//console log

// let bonusPoint = 50
// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

//Practice_lap_counter------------------------------------------->

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// function callout() {
//     console.log(42)
// }

// callout()

// Method1
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// totalLapTime()

// Method2
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLapTime() {
//     console.log(lap1 + lap2 + lap3)
// }

// totalLapTime()

// let totalLap = lap1 + lap2 +lap3

// console.log(totalLap)

// let lapsCompleted = 0
//create function the increments the var by one
//run three times
// lapsCompleted = lapsCompleted + 1 * 3//my method

// function incrementlap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementlap()//----calliing the function

// console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     // console.log("clicked")
//     count = count + 1
//     countEl.innerText = count
// }



//START------------------------------------------->
//intialize count as 0
//"listen" for clicks on btn
//increment value when btn clicked
//change "count-el" in html for new count

// function increment() {
//     console.log("the button was clicked")
// } 

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}


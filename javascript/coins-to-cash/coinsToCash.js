
// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.
// quarters, nickels, dimes, pennies
// For each coin type, give yourself as many as you like.
const piggyBank= {
    quarters: 62,
    dimes: 2,
    nickels: 9,
    pennies: 342
}

// set these dumbass money things into variables i can use
let pennies = piggyBank.pennies*.01
let dimes = piggyBank.dimes*0.10
let nickels = piggyBank.nickels*.05
let quarters = piggyBank.quarters*.25
const trashWayToDoThis = pennies + dimes + nickels + quarters
// I need to define something almost universal that I can throw into the loop that runs whateever i want

// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.
let dollarAmount = trashWayToDoThis
//loops are a thing but hey we dumb
// for (var key in piggyBank) {
//     let currentpiggyBank = piggyBank[key];
//         for (var i = 0; i < currentpiggyBank.length; i++) {
//             let detail = currentpiggyBank[i];
//             console.log(detail.dimes*10)
//         }
//     }

console.log("I cheesed this exercise, your total is: $" + dollarAmount + ". See you on the next one where this failure to use a for loop will really hurt!")

// When done, output the value to the browser console.

// For example, if my piggy bank only held those pennies from above, when I type the variable name of dolllarAmount into the console, the output would be.



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

console.log("I cheesed this exercise, your total is: $" + dollarAmount + ". See you on the next one where this failure to use a for loop will really hurt!")

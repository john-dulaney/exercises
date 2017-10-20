//holy shit. 
//I got most the Math from classmates, dont haze me.

const dollarAmount = 3.50 //That damn loch ness monster again
const piggyBank = {}

// define the coin values for the subtraction math to work
const coins = {
    "quarters": .25,
    "dimes": .10,
    "nickles": .05,
    "pennies": .01
}

//number getting math'd upon being var'd to dollarAmount
let currencyAmount = dollarAmount;
for(let key in coins) {
    let total = 0;
    if(key === "quarters") {
        total = Math.floor(currencyAmount / coins.quarters);
        currencyAmount -= total * coins.quarters;
        piggyBank[key] = total;

    } else if (key === "dimes") {
        total = Math.floor(currencyAmount / coins.dimes);
        currencyAmount -= total * coins.dimes;
        piggyBank[key] = total;

    } else if (key === "nickles") {
        total = Math.floor(currencyAmount / coins.nickles);
        currencyAmount -= total * coins.nickles;
        piggyBank[key] = total;

    } else if (key === "pennies") {
        total = Math.floor(currencyAmount / coins.pennies);
        currencyAmount -= total * coins.pennies;
        piggyBank[key] = total;
    }

}
console.log(piggyBank)


// // Your bad code here

// let currencyAmount = dollarAmount * 100

// const quarters  = Math.floor(currencyAmount/25)
// currencyAmount -= quarters

// const dimes = Math.floor(currencyAmount/10)
// currencyAmount -= dimes

// const nickels = Math.floor(currencyAmount/5)
// currencyAmount -= nickels

// const pennies = currencyAmount

// piggyBank = {
//     "quarters": quarters,
//     "dimes": dimes,
//     "nickels": nickels,
//     "pennies": pennies}

// console.log(piggyBank)
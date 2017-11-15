//import review for use
// const reviewFactory = require("./rev-factory.js")
const factory = (function (reviewMe) {
    console.log("review DOM function up")
    let reviewEl = document.getElementById("reviews")
    
    reviewEl.innerHTML += `
    <div id="${revFact.id}"></div>
    <h1>${revFact.title}</h1>
    <div>${revFact.description}</div>
    <div>${revFact.price}</div>
    <div>${revFact.quantity}</div>
    <div><img src="${revFact.image}></img></div>
    `
})

// modules.exports = null
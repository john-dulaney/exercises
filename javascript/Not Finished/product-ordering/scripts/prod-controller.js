//import factory for use
// let productFactory = require("./prod-factory.js")

const factory = (function (stuff) {
    console.log("product DOM function up")
    let productEl = document.getElementById("products")
    
    productEl.innerHTML += `
    <div id="${productFactory.id}"></div>
    <h1>${productFactory.title}</h1>
    <div>${productFactory.description}</div>
    <div>${productFactory.price}</div>
    <div>${productFactory.quantity}</div>
    <div><img src="${productFactory.image}></img></div>
    `
})

// modules.exports = null



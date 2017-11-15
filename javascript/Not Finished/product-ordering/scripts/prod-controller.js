

    // //import factory for use

const loadProducts = (product, domSelector) => {
    const productEl = document.getElementById("products")
    console.log("product DOM function up")
    
    productEl.innerHTML += `
    <article class="product product-${product.id}">
    <section class="product__title">
    ${product.title}
    </section>
    <section class="product__body">
    <p>${product.description}</p>
    <p>${product.price}</p>
    <p>${product.quantity}</p>
    <div><img src="${product.image}></img></div>
    </section>
    </article>
    `
}

module.exports = buildproductComponent













// D E P R E C A T E D
// // let product = require("./prod-factory.js")

// const loadProducts = (function (db) {
    
//     productEl.innerHTML += `
//     <div id="${product.id}"></div>
//     <h1>${product.title}</h1>
//     <div>${product.description}</div>
//     <div>${product.price}</div>
//     <div>${product.quantity}</div>
//     <div><img src="${product.image}></img></div>
//     `
// })

// modules.exports = loadProducts
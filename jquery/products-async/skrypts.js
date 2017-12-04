$(document).ready(function () {
    const outputEl = $("#products")
    $.ajax({
        "url": "products.json",
    }).then(theProduct => {

        const products = theProduct.products

        $.ajax({
            "url": "categories.json"
        }).then(theCategory => {

            outputhtml = ""

            const categories = theCategory.categories

            products.forEach(p => {

                theCategory = categories.find(c => c.id === products.categories_id)

                outputhtml += `
                <div id="product__${p.id}">
                <h1>${p.name}</h1>
                <p> Cost: ${p.price}</p>
                </div>
                `
                
                outputEl.HTML(outputhtml)
            })
        })
    })
})


// $.ajax({
// })
// <p>${p.category_id}</p>
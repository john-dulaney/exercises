console.log("main up")

//get data loaded
const db = require("./db.js")
// One module contains the product information (i.e. productFactory)
const productFactory = require("./prod-factory.js")
// One module displays the product information (i.e. product Controller)
const productController = require("./prod-controller.js")
// One module builds the navigation bar
const navBar = require("./navbar.js")
// One module contains the review information (i.e. reviewFactory)
const reviewFactory = require("./rev-factory.js")
// One module displays the review information (i.e. reviewController)
const reviewController = require("./rev-controller.js")




let Betsy = {}
Betsy.db = loadDb("dayyyyta")
loadProducts(Betsy.db)
loadReviews(Betsy.db)

console.log("Betsy up!", Betsy);





const buildArticleComponent = (article, domSelector) => {
    const articlesEl = document.querySelector(domSelector)

    articlesEl.innerHTML += `
        <article class="article article-${article.id}">
            <section class="article__title">
                ${article.title}
            </section>
            <section class="article__body">
                ${article.body}
            </section>
            <section class="article__tags">
                ${article.tags.join(", ")}
            </section>
        </article>
    `
}

module.exports = buildArticleComponent











































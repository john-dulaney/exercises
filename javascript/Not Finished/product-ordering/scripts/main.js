console.log("cells within cells interlinked, INTERLINKED")

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



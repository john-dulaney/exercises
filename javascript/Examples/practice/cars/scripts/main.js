const carFactory = require("./carFactory.js")
const garage = require("./garage.js")
const gasStation = require  ("./gasStation.js")

const lambo = carFactory("Lamborghi", "Countach", 100)
garage.park(lambo)



lambo.drive(1700)
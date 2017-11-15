const gasStation = require("./gasStation.js")



const idMaker = function* (startFrom = 0){
    let id=1
    while(true){
        yield id + startFrom
        id++
    }
}

const idGenerator = idMaker()


const carFactory = (make, model, range) => {
    return Object.create(null, {
        "id":{
            value: idGenerator.next().value,
            enumerable: true
        },
        "make":{
            value: make,
            enumerable: true
        },
        "model":{
            value: model,
            enumerable: true
        },
        "maxRange":{
            value: range,
            enumerable: true
        },
        "currentRange":{
            value: 0,
            enumerable: true
        },
        "drive":{
            value: function(milesToDestination){
                const check = 5
                let milesTraveled = 0
                let currentRange = this.currentRange
                do {
                    if (this.currentRange > 0) {
                        this.currentRange -= check
                    } else {
                    gasStation.fillUp(this)
                        }
                milesTraveled += check
                } while (milesTraveled < milesToDestination)
                    
                }
            }
        }
    )
}





modules.exports = 
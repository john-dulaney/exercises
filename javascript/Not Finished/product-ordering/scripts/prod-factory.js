//One module contains the product information (i.e. productFactory)

//Unique ID generation
const idMaker = function* (startFrom = 0){
    let id=1
    while(true){
        yield id + startFrom
        id++
    }
}
const idGenerator = idMaker()


// Product information ------ description title price quantity image
const productFactory = (title, description, price, quantity, image) => {
    return Object.create(null, {
        "id":{
            value: idGenerator.next().value,
            enumerable: true
        },
        "title":{
            value: title,
            enumerable: true
        },
        "description":{
            value: description,
            enumerable: true
        },
        "price":{
            valu: price,
            enumerable: true
        },
        "quantity":{
            value: quantity,
            enumerable: true
        },
        "image":{
            value: image,
            enumerable: true 
            }
        }
    )
}

productFactory()



// modules.exports = 







            // value: function(milesToDestination){
            //     const check = 5
            //     let milesTraveled = 0
            //     let currentRange = this.currentRange
            //     do {
            //         if (this.currentRange > 0) {
            //             this.currentRange -= check
            //         } else {
            //         gasStation.fillUp(this)
            //             }
            //     milesTraveled += check
            //     } while (milesTraveled < milesToDestination)
                    
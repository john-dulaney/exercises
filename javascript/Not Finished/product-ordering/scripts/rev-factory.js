// One module contains the review information (i.e. reviewFactory)

//Unique ID generation
const idMaker = function* (startFrom = 0){
    let id=1
    while(true){
        yield id + startFrom
        id++
    }
}
const idGenerator = idMaker()


// review information ------ description title price quantity image
const reviewFactory = (userName, comment, date) => {
    return Object.create(null, {
        "id":{
            value: idGenerator.next().value,
            enumerable: true
        },
        "userName":{
            value: userName,
            enumerable: true
        },
        "comment":{
            value: comment,
            enumerable: true
        },
        "date":{
            valu: date,
            enumerable: true
        },
        }
    )
}


// modules.exports = 
const carGarage = []
const garage = {
    "cars" : [],
    "retrieve" : function(carID){
        return carGarage.find(car => car.id === carID)
    },
    "park": function(car){
        carGarage.push(car)
    }
}
module.exports = 
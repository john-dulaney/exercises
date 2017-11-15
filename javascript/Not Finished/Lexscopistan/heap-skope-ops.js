console.log("Cells within cells within cells interlinked. INTERLINKED")
const gemHeapSkope = function () { 
    // Resource contained inside

    const gemMine = {
        "Onyx": {
        "kilograms": 453
            },

        "Amethyst": {
        "kilograms": 453
            },

        "Bloodstone": {
        "kilograms": 453
            },

        "Emerald": {
        "kilograms": 453
            }
                //1,812 we should end with ~90kg per after processing functions run
   }
        return {
            "process": function (requestedMineral) {
                for (let key in gemMine) {
                    // if (gemMine.hasOwnProperty(key)) {
                        const mineAmount = gemMine[key].kilograms;
                        console.log(mineAmount)
                        
                    }
                }
            }
        }
//             //something goes here function??
            
//             return {
//                 "mineral": requestedMineral,
//                 "amount": gemMine.kilograms // Change this to the correct amount
//             }
//         }
//     }   
// }
//     const storageGen = function* () {
//         let currentContainer = 1
//         const maximumContainers = 30
        
//         while (currentContainer <= maximumContainers) {
//             yield { "id": currentContainer, "mineral": "amount", "": [] }
//             currentContainer++
            
//         }
//     }
//     console.log(gemHeapSkope)
/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
// const SkopeManager = gemHeapSkope()

/*
Process the gems in any order you like until there none
left in the gem mine.
*/


// Create a generator for 30 storage containers, which is how many a hëap-skope
// is equipped with.

const sumValues = gemMine => Object.values(gemMine).reduce((a, b) => a + b)
// let gemMine = {
//     value: 5,
//     [Symbol.iterator]: function* () {
//         for (let i = this.value; i >= 0; i-5) {
//             yield i;
//             if (gemMines = 0) {    
//                 break
//             }
//         }}};
//   for (let v of gemMine) {
//     console.log(v)}







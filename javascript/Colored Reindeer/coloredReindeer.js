
const coloredReindeerBuilder = function () {
const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    // Write a for loop that looks at each reindeer
    for (var i = 0; i < reindeer.length; i++) {
        var currentReindeer = reindeer[i];
    }
    // Invoke factory function to create reindeer object
    const reindeerCreate = function* () {
        const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]     
            for (let i = 0; i < colors.length; i++) {
                yield colors[i]
            }
        }

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array
    }

// Place each object in an array named coloredReindeer.
//Empty array for generated objects
const coloredReindeer = []

// Create a new object that represents a reindeer - the object will include the reindeer's name and its color. Use a generator function to attach each of the following colors, in order, to the reindeer. Use a factory function to generate the reindeer object.


const reinColor = function* {
    return Object.create(null,
    "coloredReindeer" : ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    )

}

// // Each object produced by the factory function
// [{ "name": "Dasher", "color": "Blue" }, etc...]

// Iterate over the coloredReindeer array and insert a new <section> element in the colored-reindeer element that displays the reindeer name, with a font color corresponding to the color in the object.

// Pro tip: Remember to make your code modular. The JavaScript for generating the data should be in one file, and the JavaScript for manipulating the DOM should be in a different file.

//Code from yesterday

// //generator template
// const idMaker = function* () {
//     let id = 0

//     while (true) {
//         yield id    
//         id++
//     }
// }
// //set that function in a var
// const idFactory = idMaker()

// const blogObjectFactory = function (title,entry, ...tags) {
//     return Object.create(null, {
//         "id": {value: idFactory.next().value, enumerable: true},
//         "title": {value:title, enumerable:true},
//         "body": {value:entry, enumerable:true},
//         "tags": {value:tags, enumerable:true},
//         "published": {value:Date.now(), enumerable:true},
//     })
// }

// const myFirstDay = blogObjectFactory("My first day at NSS",
//         "<h1>ou lead instructor is a jerk</h1>",
//         "nss", "steve", "wtf",)

// const myFSecondDay = blogObjectFactory("My first day at NSS",
//         "<h1>ou lead instructor is a jerk</h1>",
//         "nss", "steve", "wtf",)
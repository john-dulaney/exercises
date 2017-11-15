
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []

    // Write a for loop that looks at each reindeer
    for (var i = 0; i < reindeer.length; i++) {
        var currentReindeer = reindeer[i];
    }
    // Invoke factory function to create reindeer object
    
        }

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array
    
const reindeerCreate = function* () {
        const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]     
            for (let i = 0; i < colors.length; i++) {
                yield colors[i]
            }}
// Place each object in an array named coloredReindeer.
//Empty array for generated objects

// Create a new object that represents a rei ndeer - the object will include the reindeer's name and its color. Use a generator function to attach each of the following colors, in order, to the reindeer. Use a factory function to generate the reindeer object.


// const reinColor = function* {
//     return Object.create(null,
//     "coloredReindeer" : ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
//     )}

// // Each object produced by the factory function
// [{ "name": "Dasher", "color": "Blue" }, etc...]

// Iterate over the coloredReindeer array and insert a new <section> element in the colored-reindeer element that displays the reindeer name, with a font color corresponding to the color in the object.


//Code from yesterday

// Generator function definition
const idGenerator = function* (from) {
    let id = 1
    while (true) {
        yield from + id
        id++
    }
}

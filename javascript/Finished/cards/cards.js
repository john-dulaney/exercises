//John Dulaney - NSS - Cards exercise

console.log("cells interlinked, interlinked")

//id generator
const idGenerator = function* (startFrom = 0) {
    let id = 1

    while (true) {
        yield id + startFrom
        id++
    }
}

let cardGen = idGenerator();

const buttonEl = document.getElementById("buttonEl")
const cardEl = document.getElementById("card")

let cardInserter = function(event){
    // set the id generator to a variable
    const uniqueId = cardGen.next().value

    //get the text from the text box, store into variable to but used in the innerhtml
    let cardContent = document.getElementById("message").value

    //add innerHTML, calling idgenerator in both the div id and button id. 
    cardEl.innerHTML += `
        <div class="card__Out" id="card__${uniqueId}">
        <h4>${cardContent}</h4>
        <button id="button__${uniqueId}">Delete This</button>
        <div>
    `
                }
buttonEl.addEventListener("click", cardInserter)
            

let deleteCard = function(event) {
    const btnId = event.target.id
    const btnIdNum = btnId.split("__")[1];
    
    if (btnId.startsWith("button__")) {

        let cardToRemove = document.getElementById("card__" + btnIdNum)
        console.log("You removed a card", cardToRemove)
        
        cardEl.removeChild(cardToRemove)
    }
}
cardEl.addEventListener("click", deleteCard)
        


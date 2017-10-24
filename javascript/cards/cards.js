//Cards

//set some variables
const buttonEl = document.getElementById("card")
const deleteID = btn
// const cardID = ""

//insert DOM content on button press, Card class with button
document.getElementById("buttonEl").addEventListener("click", function buttonIn(event) {
    let messageGet = document.getElementById("message").value
    buttonEl.innerHTML += `
    <div class="cards">
    <h4>${messageGet}</h4>
    <button id="${deleteID}">Delete This Before Ex Sees It</button>
    <div>
    ` 
})
//Nowhere near baseline
console.log("cells interlinked, interlinked")


function deleteThis() {
    let btn = document.getElementById('btn')
    btn.onclick = function () {
        document.getElementById('card').remove()
        this.remove()
}}

// function deleteButton() {
//     let dBtn = document.getElementById('card');
//     dBtn.parentNode.removeChild(dBtn);
//     return false;
// }
// function pageInit() {
//     // Hook up the "remove dummy" button
//     let btn = document.getElementById('btnRemove');
//     if (btn.addEventListener) {
//         btn.addEventListener('click', deleteButton, false);
// }}

    




























// //what
//     function addMessage (message){
//         if (message === event)
//     }

    
// Delete card on actual card buttons press, remove using node.removeChild()


// // Factory for delete IDs, generation a DOM
// const deleteID = function () {
//    return Object.create(null
//     )}

// // Generator for new IDs to be applied for cards
// while (condition) {
//     yield variables
//     i++
// }


// //use this later
// event.target.className


// function addCard(message)


//     if message= === event


const homeInventory = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryEl = document.getElementsByClassName("inventory")[0]

for (var key in homeInventory) {
    // if (homeInventory.hasOwnProperty(key)) {
        const currentItem = homeInventory[key];
        for (var i = 0; i < currentItem.length; i++) {
            var detail = currentItem[i];
            

            inventoryEl.innerHTML += `
        <section class="${key}" id="${detail.type}">
            <h2><strong>${detail.name}</strong></h2>
            <div>${detail.location}</div>
            <div>${detail.description}</div>
        </section>
            
            `    
        }
}


 

















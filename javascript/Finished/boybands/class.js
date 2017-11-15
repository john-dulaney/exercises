const HomeInventoryDatabase = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryEl = document.getElementsByClassName("inventory")[0]


for (var key in HomeInventoryDatabase) {
        //Array of Objects
        const currentType = HomeInventoryDatabase[key];
        //Loop the array
        for (var i = 0; i < currentType.length; i++) {
            //current item in array
            var item = currentType[i];
 
            //DOM ((Plus equal means append to DOM element))
            inventoryEl.innerHTML += 
            `
            <section class="${key}">
                <h2>${item.name}</h2>
            </section>

            `

        }
}






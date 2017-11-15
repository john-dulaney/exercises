// This code spits to page and is pretty much the code I use for databases. Probably explains why detail is individual letters and not words

//B2M doesnt belong here
let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
const bandElement = document.getElementById("boy-bands");

// Execute a for loop that will iterate over the arrays
for (var key in bands) {
  const currentBand = bands[key];
  for (var i = 0; i < currentBand.length; i++) {
    var detail = currentBand[i];
        bandElement.innerHTML += `${detail} `
  }
}

// Im a fruit guy myself
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
const veggieElement = document.getElementById("vegetables");

for (var key in vegetables) {
  const currentVegetable = vegetables[key];
  for (var i = 0; i < currentVegetable.length; i++) {
    var detail = currentVegetable[i];
        veggieElement.innerHTML +=  `${detail} `
    }
  
  }
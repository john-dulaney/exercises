//Good ole copy/paste


// Example objects
const vintageInkwell = {
    "name": "Vintage Ink Well",
    "type": "crafts",
    "location": "Writing desk",
    "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
const writingDesk = {
    "name": "Shaker Writing Desk",
    "type": "furniture",
    "location": "Bedroom",
    "description": "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}  
const rollChair = {
  "name": "Wal Mart Chair, PoS",
  "type": "furniture",
  "location": "Bedroom",
  "description": "This antique chair is special because I found and purchased it with my wife at an Ohio Amish auction."
}  
const comfyBed = {
  "name": "Comfy bed",
  "type": "furniture",
  "location": "Bedroom",
  "description": "Nice little bed from the fam."
}  
const deskComputer = {
  "name": "Custom built to be the best, Outdated in months.",
  "type": "electronics",
  "location": "Bedroom",
  "description": "Built Computer with the best parts to play games from 1999 and look at Facebook"
}  
const writingPen = {
  "name": "Real Nice Pen",
  "type": "crafts",
  "location": "Office",
  "description": "This pen is special because I found and purchased it with my wife at an Ohio Amish auction."
}  
const writingPaper = {
  "name": "Expensive Writing Paper",
  "type": "crafts",
  "location": "Bedroom",
  "description": "Overpaid for this at Wal-Mart maybe..."
}  
const littleDog = {
  "name": "Prudie",
  "type": "crafts",
  "location": "House",
  "description": "This antique dog is special because I found and purchased it with my wife at an Ohio Amish auction."
}  
const flatScreen = {
  "name": "Samsumg Flat Screen",
  "type": "electronics",
  "location": "Bedroom",
  "description": "Shows me sports."
}  
const couch = {
  "name": "couch",
  "type": "furniture",
  "location": "living room",
  "description": "This antique couch is special because I found and purchased it with my wife at an Ohio Amish auction."
}  
const dvdPlayer = {
  "name": "DVD Player",
  "type": "electronics",
  "location": "living room",
  "description": "THis is never used."
}  

// Example arrays
let crafts = [vintageInkwell, writingPen, writingPaper, littleDog]
let furniture = [writingDesk, rollChair, comfyBed, couch]
let electronics = [deskComputer, flatScreen, dvdPlayer]


  // Example database
let HomeInventory = {
    "furniture": furniture,
    "crafts": crafts,
    "electronics": electronics
  }


  crafts.push(vintageInkwell)
  furniture.push(writingDesk)




  const homeInventoryString = JSON.stringify(HomeInventory)
  localStorage.setItem("homeInventory", homeInventoryString)

const cropContainerGenerator = function* () {
    let currentContainer = 1
    const maximumContainers = 10

    while (currentContainer <= maximumContainers) {
        yield { "id": currentContainer, "type": "Crop", "bushels": [] }
        currentContainer++
    }
}

const cropContainerFactory = cropContainerGenerator()

let agriculturalField = [
    {
        "type": "Corn",
        "plants": 368
    },
    {
        "type": "Wheat",
        "plants": 452
    },
    {
        "type": "Kale",
        "plants": 212
    },
    {
        "type": "Turnip",
        "plants": 84
    }
]

const cropStackSkope = function (rawCrops) {
    
    const processedCrops = rawCrops.map(
       
        currentCrop => ({
            "type": currentCrop.type,
            "bushels": Math.floor(currentCrop.plants / 22)
        })
    )
    return processedCrops
}

cropStackSkope.containers = []

let allBushels = cropStackSkope(agriculturalField)

let currentContainer = cropContainerFactory.next().value
allBushels.forEach(

    currentBushel => {
        for (let i = 0; i < currentBushel.bushels; i++) {
            const bushel = {"type": currentBushel.type}
            currentContainer.bushels.push(bushel)
            
            if (currentContainer.bushels.length === 21) {
                cropStackSkope.containers.push(currentContainer)
                currentContainer = cropContainerFactory.next().value
            }
        }
    }
)
if (currentContainer.bushels.length > 0) {
    cropStackSkope.containers.push(currentContainer)
}

// Take a look at what's in your containers
console.log(cropStackSkope.containers)
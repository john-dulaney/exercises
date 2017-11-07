// One module builds the navigation bar
console.log("navbar up")


//steveBar
const navigation = [
    {
        "display": "Betsy"
    },
    {
        "display": "Categories"
    },
    {
        "display": "Orders"
    },
    {
        "display": "Log Out"
    }
]

// Get the `ul` to which I will add `li` children
const navEl = document.getElementsByClassName(`navBar`)[0]

navigation.forEach(el => {
    // Create a new `li`
    const newItem = document.createElement(`li`)

    // Add a class to the `li`
    newItem.className = `navList__link`

    // Create an `a` tag as a child of the `li`
    const newLink = document.createElement(`a`)
    newLink.href = `#`
    newLink.className = `navList__link--${el.display.toLowerCase()}`
    newLink.appendChild(document.createTextNode(el.display))

    // When any section is clicked
    newLink.addEventListener(`click`, e => {
        const sectionName = e.target.className.split(`--`)[1]
        const sectionEl = document.getElementById(sectionName)

        // Add `hidden` class to all main sections
        Array.from(document.getElementsByClassName(`mainSection`))
            .forEach(
                section =>
                    section.classList.add(`hidden`)
            )

        // Then remove it from the one the user clicked on
        sectionEl.classList.remove(`hidden`)
    })

    newItem.appendChild(newLink)

    // Add `li` to the navigation `ul`
    navEl.appendChild(newItem);
})

module.exports = null

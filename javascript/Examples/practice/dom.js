

const navEl = document.getElementById("navigation")
const outputEl = document.getElementById("output")
const fooEl = document.getElementsByClassName("foo")

const sectEl = document.querySelector("#output section.foo")

// sectEl.innerHTML += `<strong>Jared is <span style="color:red;">Awesome</span></strong>`
// navEl.innerHTML += `<strong>Jared is <span style="color:red;">Awesome</span></strong>`
// outputEl.innerHTML += `<strong>Jared is <span style="color:red;">Awesome</span></strong>`
// sectEl.innerHTML += `<strong>Jared is <span style="color:red;">Awesome</span></strong>`

const instrName = "Joe"

for (let i = 0; i < fooEl.length; i++) {
    let element = fooEl[i];
    element.innerHTML = `<strong>Jared is <span style="color:red;">Awesome</span></strong>`
}

sectEl.innerHTML = `<strong>${instrName} is <span style="color:red;">Awesome</span> and <span style="color:blue">funny</span></strong> `
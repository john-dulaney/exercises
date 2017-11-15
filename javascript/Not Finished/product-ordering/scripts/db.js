










const loadDatabase = (localStorageKey) => {
    const dbString = localStorage.getItem(localStorageKey)
    console.log("db")
    return JSON.parse(dbString) || {}
}

module.exports = loadDatabase










































// kill me
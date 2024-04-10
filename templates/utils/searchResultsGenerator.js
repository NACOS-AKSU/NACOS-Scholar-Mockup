const { projectResultsCard } = require("../components/projectCard")

const searchResultsGenerator = (searchQuery) => {
    let searchElement = ``

    for (let i = 0; i < 4; i++) {
        searchElement += projectResultsCard()
    }
    return searchElement
}

module.exports = { searchResultsGenerator }
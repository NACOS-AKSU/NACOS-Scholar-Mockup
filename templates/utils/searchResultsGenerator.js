const { projectResultsCard } = require("../components/projectCard")

const searchResultsGenerator = (searchQuery) => {
    let searchElement = ``
    
    return `${projectResultsCard()}`
}

module.exports = { searchResultsGenerator }
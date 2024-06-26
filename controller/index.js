const homePageData = require("../templates/screens/home")
const searchResultsPageData = require("../templates/screens/searchResults")
const projectPageData = require("../templates/screens/project")

async function home(req, res) {
    res.render('index', homePageData)
}

async function searchResultsPage(req, res) {
    const { query } = req.query
    res.render('index', await searchResultsPageData(query))
}

async function projectPage(req, res) {
    const { id } = req.params
    res.render('index', await projectPageData(id))
}

module.exports = { home, searchResultsPage , projectPage}
const homePageData = require("../templates/screens/home")
const searchResultsPageData = require("../templates/screens/searchResults")

async function home(req, res){
    res.render('index', homePageData)
}

async function searchResultsPage(req, res){
    const {query} = req.query
    res.render('index', await searchResultsPageData(query))
}

module.exports = {home, searchResultsPage}
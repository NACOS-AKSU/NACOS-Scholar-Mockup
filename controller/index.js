const homePageData = require("../templates/screens/home")

async function home(req, res){
    res.render('index', homePageData)
}
async function searchResultsPage(req, res){
    res.render('index', searchResultsPageData)
}

module.exports = {home, searchResultsPage}
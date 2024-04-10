const homePageData = require("../templates/screens/home")

async function home(req, res){
    res.render('index', homePageData)
}

module.exports = {home}
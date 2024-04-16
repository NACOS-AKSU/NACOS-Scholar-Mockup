const { searchProjects } = require("../../services/projectsApi")
const { projectResultsCard } = require("../components/projectCard")

const searchResultsGenerator = async (searchQuery) => {
    if (searchQuery.length <= 3) {
        return `<div class="info"><p>Sorry, i didn't quite catch that!</p></div>`
    }
    let searchElement = ``
    let searchData = {
        "searchBy": "title",
        "searchKey": searchQuery
    }
    const response = await searchProjects("/projects/search", searchData)
    if (response == undefined) {
        return `<div class="info"><p>An Error Occured! #001</p></div>`
    }

    if (response.isSuccess === false) {
        return `<div class="info"><p>${response.message}</p></div>`
    }

    if (response.data && response.data[0]) {
        const projects = response.data
        for (const project of projects) {
            searchElement += projectResultsCard(project)
        }
        return searchElement
    }

    console.log(response);
    return `<div class="info"><p>An Error Occured! #003</p></div>`
}

module.exports = { searchResultsGenerator }
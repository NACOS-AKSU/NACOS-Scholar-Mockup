const { searchProjects } = require("../../services/projectsApi")
const { projectResultsCard } = require("../components/projectCard")

const searchResultsGenerator = async (searchQuery) => {
    let searchElement = ``
    let searchData = {
        "searchBy": "title",
        "searchKey": searchQuery
    }
    const response = await searchProjects("/projects/search", searchData)
    if(response == undefined){
        return `<div class="info"><p>An error occured!</p></div>`
    }

    const projects = response.data || undefined
    if (projects[0] == undefined, !projects[0]) {
        searchElement += projectResultsCard(project)
        return `<div class="info">${response.message}</p></div>`
    }

    for (const project of projects) {
        searchElement += projectResultsCard(project)
    }
    return searchElement
}

module.exports = { searchResultsGenerator }
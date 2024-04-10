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
    
    if (response.isSuccess === false) {
        return `<div class="info"><p>${response.message}</p></div>`
    }

    if(response.data[0]){
        const projects = response.data
        for (const project of projects) {
            searchElement += projectResultsCard(project)
        }
        return searchElement
    }

}

module.exports = { searchResultsGenerator }
const projectResultsCard = data =>{
    return `
    <div class="search-results-card">
        <h2>${data.title}</h2>   
        <p>${data.description}</p>     
        <div>
            <div>
                <label>Writen By: ${data.author}</label>
                <label>Supervised By: ${data.supervisors[0]}</label>
            </div>
            <div>
                <label>${data.publicationDate.month}, ${data.publicationDate.year}</label>
            </div>
        </div>

    </div>`
}
module.exports = {projectResultsCard}

require('dotenv').config()
const { footer } = require('../components/footer')
const { meta } = require('../components/meta')
const { nacosScholarText } = require('../components/nacos-scholar')
const { searchBoxSection } = require('../components/searchSection')
const { searchResultsGenerator } = require('../utils/searchResultsGenerator')

const searchResultsPageContent = async (searchQuery) => {
    return `${nacosScholarText()}
            ${searchBoxSection(searchQuery)}
            <div class="search-results-container">
                ${await searchResultsGenerator(searchQuery)}
            </div>
            ${footer()}
            `
}
const data = async (searchQuery) => {
    return {
        title: `${process.env.PROJECT_NAME}`,
        meta: `${meta()}
        <link rel='stylesheet' href='/stylesheets/search-results.css' />
    `,
        content: await searchResultsPageContent(searchQuery)
    }
}

module.exports = data
const { nacosScholarText } = require('../components/nacos-scholar')

require('dotenv').config()
const searchResultsPageContent = () => {
    return `<div class="center-container">
                ${nacosScholarText()}
                <div>
                <p>${process.env.PROJECT_DESCRIPTION}</p>
                </div>
            </div>

            <div class="footer-text">
                <span>Licenses</span>
                <span>Beta Version 0.9</span>
                <span>Privacy Policy</span>
            </div>
            `
}

const data = {
    title: `${process.env.PROJECT_NAME}`,
    meta: `<link rel='stylesheet' href='/stylesheets/home.css' />
    `,
    content: searchResultsPageContent()
}

module.exports = data
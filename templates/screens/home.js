const { nacosScholarText } = require('../components/nacos-scholar')
const { searchBoxSection } = require('../components/searchSection')

require('dotenv').config()
const homePageContent = () => {
    return `<div class="center-container">
                ${nacosScholarText()}
                <div>
                ${searchBoxSection()}
                <p>${process.env.PROJECT_DESCRIPTION}</p>                </div>
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
    meta: `    <link rel='stylesheet' href='/stylesheets/home.css' />
    `,
    content: homePageContent()
}

module.exports = data
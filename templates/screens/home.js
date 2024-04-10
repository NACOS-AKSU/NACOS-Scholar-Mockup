const { nacosScholarText } = require('../components/nacos-scholar')

require('dotenv').config()
const homePageContent = () => {
    return `<div class="center-container">
                ${nacosScholarText()}
                <div>
                <p>Student Project repository for searching and researching past projects</p>
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
    meta: `    <link rel='stylesheet' href='/stylesheets/home.css' />
    `,
    content: homePageContent()
}

module.exports = data
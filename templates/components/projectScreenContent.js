function screenContent(project){
        return `
    <div class="project-details-container">
        <div class="project-details">
            <h2> ${project.title}</h2>

            <div class="project-meta">
                <span>Written By: ${project.author}</span> <span>Supervised By: ${project.supervisors[0]}</span>
            </div> 

            <h3 class="abstract">Abstract</h3>
            <p class="project-content">${project.abstract}</p>
            <h3>Framework</h3>
            <p class="project-content"></p>
            <div class="cta-box">
                <p>${project.publicationDate.month}, ${project.publicationDate.year}</p>
                <input type="submit" id="download-btn" projectId="${project._id}" downloadable="true" class="btn btn-primary" value="Download" />
            </div>
        </div>
    </div>
    <script type="module" src="/javascripts/screens/project.js"></script>   
    `
} 

module.exports = {screenContent}
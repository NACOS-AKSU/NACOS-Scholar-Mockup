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
        </div>
    </div>   
    `
} 

module.exports = {screenContent}
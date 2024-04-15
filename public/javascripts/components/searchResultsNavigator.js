const searchResultCards = document.querySelectorAll(".search-results-card")
searchResultCards.forEach(card =>{
    card.addEventListener("click", (e)=>{
        const projectId = e.target.getAttribute("project-id") || e.target.parentElement.getAttribute("project-id") || e.target.parentElement.parentElement.getAttribute("project-id") || e.target.parentElement.parentElement.parentElement.getAttribute("project-id")
        window.location.href = `/project/${projectId}`
    })
})
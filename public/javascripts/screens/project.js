const downloadBtn = document.getElementById("download-btn")
downloadBtn.addEventListener("click", async (e) => {
    const target = e.target
    const projectId = target.getAttribute("projectId")
    target.innerText = "Downloading..."

    if (target.getAttribute("downloadable") == "false") {
        alert("Document download not yet available for this project")
        target.innerText = "Download"
        return
    }
    try {
        const response = await fetch(`/project/download/${projectId}`)
        const data = await response.json()
        alert(data.data)
        if (data.isSuccess == true) {
            window.open(data.url, "_blank")
        }
        target.innerText = "Download"
    } catch (error) {
        console.log(error);
        alert("Project download could not be processed")
        target.innerText = "Download"
    }
})
const statusContainer = document.querySelector(".server-status")
const indicator = document.querySelector(".server-status-indicator")
const indicatorText = document.getElementById("server-status-text")

export async function pingApi() {
    try {
        const response = await fetch("/ping-api")
        const data = await response.json()
        if (data.isSuccess == true) {
            indicator.style = "background-color:#5cb85c"
            return
        }
        indicator.style = "background-color:#f0ad4e"
    } catch (error) {
        console.log(error);
        indicator.style = "background-color:#d9534f"
    }
}


statusContainer.addEventListener("click", ()=>{
    alert("The resources required to keep this service running are hosted on a free platform and hence is subjected to occasional downtimes. \nYou are good to go when the indicator turns green.")
})
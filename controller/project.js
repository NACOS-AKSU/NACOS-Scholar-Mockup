const { checkProjectExistence } = require("../templates/utils/projectDecider");

async function triggerDownload(req, res) {
    const { id } = req.params

    const response = await checkProjectExistence(id)
    if (response && response.isSuccess == false) {
        res.json({ data: "Download Error" })
        return
    }
    // res.json({ data: "Download Has Started" })
    res.status(301).redirect("/")
}
module.exports = { triggerDownload }
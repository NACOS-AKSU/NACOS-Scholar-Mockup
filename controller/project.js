const { checkProjectExistence } = require("../templates/utils/projectDecider");

async function triggerDownload(req, res) {
    const { id } = req.params

    const response = await checkProjectExistence(id)
    if (response && response.isSuccess == false) {
        req.json({ isSuccess: false, data: "Download Error" })
        return
    }
    const data = response.data;
    res.json({ isSuccess: true, data: "Download Has Started", url: data.data.url })
}
module.exports = { triggerDownload }
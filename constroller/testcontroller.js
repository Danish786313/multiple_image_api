exports.test = async (req, res) => {
    var fileinfo = req.files;
    console.log(fileinfo)
    res.send(fileinfo)
    res.end()
}
exports.notFound = (req, res, next) => {
    res.status(404);
    res.send({ success: false, erro: "Endereço não encontrado" })
}

exports.serverError = (error, req, res, next) => {
    res.status(500);
    res.send({ success: false, erro: error })
}
const jwt = require("jsonwebtoken")

const authenticateJwt = (req, res, next) => {
    const token = req.header("Authorization")

    if(!token) return res.status(401).json({
        message : "Access denied"
    })

    jwt.verify(token.split(" ")[1], "PI_MEDSOS", (err, user) => {
        if(err) return res.status(401).json({ message: "Token invalid" })
        req.user = user
        next()
    })
}

module.exports = {
    authenticateJwt
}
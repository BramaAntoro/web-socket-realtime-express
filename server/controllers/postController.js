const { post } = require("../models")
const { validationResult } = require("express-validator")


const save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    try {
        const { content_text, private } = req.body

        await post.create({
            content_text,
            private: "FALSE"
        })

        res.status(201).json({
            message: 'posting successfully!',
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    save
}
const { body } = require("express-validator")
const postController = require('../controllers/postController')


module.exports = (app) => {
    const router = app.Router()

    router.post('/create', [
        body('content_text').notEmpty()
    ], postController.save)

    return router
}
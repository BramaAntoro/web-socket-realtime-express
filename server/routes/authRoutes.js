const { body } = require('express-validator')
const { major, user } = require('../models')
const bcrypt = require("bcryptjs")

const authController = require('../controllers/authController')
const { where } = require('sequelize')
const { authenticateJwt } = require('../middleware/authMiddleware')

module.exports = (app) => {
    const router = app.Router()

    router.get('/me', authenticateJwt, (req, res) => {
        res.status(200).json({ 
            message: "Token is valid",
            user: req.user
        })
    })
    router.post('/login', [
        body('username').isLength({ min: 5, max: 20 }).isString().notEmpty().custom(async (value) => {
            let usernameCheck = await user.findOne({
                where: {
                    username: value
                }
            })

            if (!!usernameCheck == false) {
                throw new Error('username not registered')
            }
        }),
        body('password').isLength({ min: 6, max: 100 }).isString().notEmpty()
    ], authController.login)
    router.post('/register', [
        body('username').isLength({ min: 5, max: 20 }).isString().notEmpty().custom(async (value) => {
            let usernameCheck = await user.findOne({
                where: {
                    username: value
                }
            })
            if (usernameCheck) {
                throw new Error('username has been registered')
            }
        }),
        body('password').isLength({ min: 6, max: 100 }).isString().notEmpty(),
        body('email').isEmail().isString().notEmpty().custom(async (value) => {
            let emailCheck = await user.findOne({
                where: {
                    email: value
                }
            })
            if (emailCheck) {
                throw new Error('email has been registered')
            }
        }),
        body('firstName').isString().notEmpty().withMessage('firstName is required'),
        body('lastName').isString().notEmpty().withMessage('lastName is required'),
        body('classes').notEmpty().withMessage('classes is required').custom((value) => {
            {
                const classValue = ['X', 'XI', 'XII']
                const isValid = classValue.includes(value)
                if (!isValid) {
                    throw new Error('Invalid class value')
                }
                return true
            }
        }),
        body('gender').notEmpty().withMessage('gender is required').custom((value) => {
            const genderValue = ['Man', 'Women']
            const isValid = genderValue.includes(value)
            if (!isValid) {
                throw new Error('Invalid gender value')
            }
            return true
        }),
        body('major_id').notEmpty().withMessage('major_id is required').custom(async (value) => {
            const majorValue = await major.findByPk(value)
            if (!majorValue) {
                throw new Error('Invalid major_id value')
            }
            return true
        })
    ], authController.save)

    return router
}
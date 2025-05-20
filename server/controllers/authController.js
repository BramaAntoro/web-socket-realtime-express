const { validationResult } = require("express-validator")
const { students, user, role, role_user, student_user } = require("../models")
const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')

const save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    try {
        const { username, password, email, firstName, lastName, classes, gender, major_id } = req.body

        const hashedPassword = await bcryptjs.hash(password, 10)
        const userData = await user.create({
            username,
            password: hashedPassword,
            email
        })

        const studentData = await students.create({
            firstName,
            lastName,
            classes,
            gender,
            major_id
        })

        const roleStudent = await role.findOne({
            attributes: ['id'],
            where: {
                name: "Student"
            }
        })

        await role_user.create({
            user_id: userData.id,
            role_id: roleStudent.id
        })

        await student_user.create({
            user_id: userData.id,
            student_id: studentData.id
        })

        res.status(201).json({
            message: ' registered successfully!',
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    const { username, password } = req.body

    const secert = "PI_MEDOS"
    const userData = await user.findOne({
        include: [
            { model: role },
            { model: students }
        ],
        where: {
            username: username
        },
        attributes: ['id', 'username', 'email', 'password']
    })

    let passwordCheck = await user.findOne({
        where: {
            username: username
        }
    })

    const isCorrectPassword = await bcryptjs.compare(password, passwordCheck.password)

    if (!isCorrectPassword) {
        throw new Error("wrong password")
    }

    const options = {
        expiresIn: '24h'
    }

    const token = jwt.sign({
        data: {
            id: userData.id,
            username: userData.username,
            email: userData.email,
            firstName: userData.students[0].firstName,
            lastName: userData.students[0].lastName,
            classes: userData.students[0].classes,
            gender: userData.students[0].gender,
            role: userData.roles[0].name
        }
    }, secert, options)

    res.status(200).json({
        message: "User found",
        token: token
    })
}

module.exports = {
    save, login
}
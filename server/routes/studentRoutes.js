const studentController = require('../controllers/StudentController')
const { body } = require('express-validator')
const { majors } = require('../models')

module.exports = (app) => {
    const router = app.Router()


    router.get('/', studentController.getAllStudents)
    router.get('/:id', studentController.getStudentById)
    router.delete('/:id', studentController.deleteStudent)
    router.put('/:id', studentController.updateStudent)

    return router
}

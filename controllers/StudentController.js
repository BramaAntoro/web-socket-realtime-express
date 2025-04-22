const StudentService = require('../services/StudentService.js')

const createStudent = async (req, res) => {
  try {
    const student = await StudentService.createStudent(req.body)
    res.status(201).json(student)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentService.getAllStudents()
    res.status(200).json(students)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getStudentById = async (req, res) => {
  try {
    const student = await StudentService.getStudentById(req.params.id)
    res.status(200).json(student)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const updateStudent = async (req, res) => {
  try {
    const student = await StudentService.updateStudent(req.params.id, req.body)
    res.status(200).json(student)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const deleteStudent = async (req, res) => {
  try {
    const student = await StudentService.deleteStudent(req.params.id)
    res.status(200).json({ message: 'Student deleted successfully', student })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
}
const { validationResult } = require('express-validator')
const db = require('../models')
const students = db.students
const major = db.major 

const createStudent = async (req, res) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json(errors)
  }
  try {
    const { firstName, lastName, classes, gender, major_id } = req.body

    const student = await students.create({
      firstName,
      lastName,
      classes,
      gender,
      major_id
    })

    res.status(201).json({
      message: 'The student has been registered successfully!',
      data: student
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getAllStudents = async (req, res) => {
  try {
    const studentsList = await students.findAll({
      attributes: ['id', 'firstName', 'lastName', 'classes', 'gender'],
      include: {
        model: major,
        attributes: ['id', 'name'] 
      }
    })
    res.status(200).json(studentsList)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getStudentById = async (req, res) => {
  try {
    const student = await students.findByPk(req.params.id, {
      attributes: ['id', 'firstName', 'lastName', 'classes', 'gender'],
      include: {
        model: major,
        attributes: ['id', 'name'] 
      }
    })
    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }
    res.status(200).json(student)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateStudent = async (req, res) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json(errors)
  }
  try {
    const student = await students.findByPk(req.params.id)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }
    const { firstName, lastName, classes, gender, major_id } = req.body

    await student.update({
      firstName,
      lastName,
      classes,
      gender,
      major_id
    })

    res.status(200).json({
      message: 'Student updated successfully!',
      data: student
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteStudent = async (req, res) => {
  try {
    const student = await students.findByPk(req.params.id)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }
    await student.destroy()
    res.status(200).json({
      message: 'Student deleted successfully',
      data: student
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
}

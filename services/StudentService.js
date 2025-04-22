const db = require('../server/models')
const students = db.students

const createStudent = async (studentData) => {
  try {
    const student = await students.create(studentData)
    return student
  } catch (error) {
    throw new Error('Error creating student')
  }
}

const getAllStudents = async () => {
  try {
    return await students.findAll()
  } catch (error) {
    throw new Error('Error fetching students')
  }
}

const getStudentById = async (id) => {
  try {
    const student = await students.findByPk(id)
    if (!student) {
      throw new Error('Student not found')
    }
    return student
  } catch (error) {
    throw new Error('Error fetching student')
  }
};

const updateStudent = async (id, studentData) => {
  try {
    const student = await students.findByPk(id)
    if (!student) {
      throw new Error('Student not found')
    }
    await student.update(studentData)
    return student
  } catch (error) {
    throw new Error('Error updating student')
  }
};

const deleteStudent = async (id) => {
  try {
    const student = await students.findByPk(id)
    if (!student) {
      throw new Error('Student not found')
    }
    await student.destroy()
    return student
  } catch (error) {
    throw new Error('Error deleting student')
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
}
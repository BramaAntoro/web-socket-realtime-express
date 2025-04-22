'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classes: {
      type: DataTypes.ENUM("X", "XI", "XII"),
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM("Man", "Women"),
      allowNull: false
    },
    major_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'majors',
        key: 'id'
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};
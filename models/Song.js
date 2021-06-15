const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Song extends Model { }

Song.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'songs' })

module.exports = Song

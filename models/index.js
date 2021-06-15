const User = require('./User.js')
const Song = require('./Song.js')

User.hasMany(Song, {
  foreignKey: 'uid',
  onDelete: 'CASCADE'
})

module.exports = { User, Song }

require('dotenv').config()

const seedUsers = require('./users.js')
const seedSongs = require('./songs.js')
const sequelize = require('../db')

async function seedAll () {
  await sequelize.sync({ force: true })
  await seedUsers()
  await seedSongs()
  process.exit()
}

seedAll()

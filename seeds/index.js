require('dotenv').config()

const seedSongs = require('./songs.js')
const sequelize = require('../db')

async function seedAll () {
  await sequelize.sync({ force: true })
  await seedSongs()
  process.exit()
}

seedAll()

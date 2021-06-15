const { User } = require('../models')

const users = [
  {
    username: 'johndoe',
    password: 'password1234'
  },
  {
    username: 'janedoe',
    password: 'password5678'
  }
]

const seedUsers = () => User.bulkCreate(users)

module.exports = seedUsers

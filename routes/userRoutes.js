const router = require('express').Router()
const { User, Song } = require('../models')

router.post('/users/auth', (req, res) => User.findOne({
  where: req.body,
  include: [Song]
})
  .then(user => res.json(user))
  .catch(err => console.log(err)))

router.post('/users', (req, res) => User.create(req.body)
  .then(user => res.json(user))
  .catch(err => console.log(err)))

module.exports = router

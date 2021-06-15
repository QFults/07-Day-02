const router = require('express').Router()
const { Song } = require('../models')

router.get('/songs', (req, res) => Song.findAll()
  .then(songs => res.json(songs))
  .catch(err => console.log(err)))

router.get('/songs/:id', (req, res) => Song.findOne({ where: { id: req.params.id } })
  .then(song => res.json(song))
  .catch(err => console.log(err)))

router.post('/songs', (req, res) => Song.create(req.body)
  .then(song => res.json(song))
  .catch(err => console.log(err)))

router.put('/songs/:id', (req, res) => Song.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

router.delete('/songs/:id', (req, res) => Song.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router

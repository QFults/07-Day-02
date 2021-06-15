const { Song } = require('../models')

const songs = [
  {
    title: 'Lavagirl',
    artist: 'ILYTommy',
    uid: 1
  },
  {
    title: 'Gorgeous',
    artist: 'Kanye West',
    uid: 2
  },
  {
    title: 'Benz Truck',
    artist: 'Lil Peep',
    uid: 1
  },
  {
    title: 'Istanbul Not Constantinople',
    artist: 'They Might Be Giants',
    uid: 2
  }
]

const seedSongs = () => Song.bulkCreate(songs)

module.exports = seedSongs

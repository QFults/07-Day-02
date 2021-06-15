const { Song } = require('../models')

const songs = [
  {
    title: 'Lavagirl',
    artist: 'ILYTommy'
  },
  {
    title: 'Gorgeous',
    artist: 'Kanye West'
  },
  {
    title: 'Benz Truck',
    artist: 'Lil Peep'
  },
  {
    title: 'Istanbul Not Constantinople',
    artist: 'They Might Be Giants'
  }
]

const seedSongs = () => Song.bulkCreate(songs)

module.exports = seedSongs

'use strict'

const store = require('../store')

// Game
const onNewGameSuccess = gameData => {
  store.gameId = gameData.game.id
  store.cell = gameData.game.cell
  store.player = 'X'
  store.over = gameData.game.over
}

const onIndexGameSuccess = gameData => {
  store.gamesPlayed = gameData.games.length
<<<<<<< HEAD
=======
  $('.messages').empty()
>>>>>>> master
  if (store.gamesPlayed < 1 || store.gamesPlayed === undefined) {
    $('.messages').html('You haven\'t played any games yet.')
  } else {
    $('.messages').html('You\'ve played ' + store.gamesPlayed + ' games so far!')
  }
}

module.exports = {
  onNewGameSuccess,
  onIndexGameSuccess
}

'use strict'

const store = require('../store')
const app = require('../app')

// // Game
const onNewGameSuccess = gameData => {
  console.log('success')
  store.gameId = gameData.game.id
  store.cell = gameData.game.cell
  store.player = 'X'
  store.over = gameData.game.over
  console.log(store.gameId)
  console.log(store.cell)
  console.log(store.player)
  console.log(store.over)
}

const onNewGameFailure = responseData => {
  console.log('failure', responseData)
}

const onUpdateGameSuccess = responseData => {
  console.log('success')
}

const onUpdateGameFailure = responseData => {
  console.log('failure', responseData)
}

const onIndexGameSuccess = gameData => {
  store.gamesPlayed = gameData.games.length
  $('.messages').empty()
  if (store.gamesPlayed < 1 || store.gamesPlayed === undefined) {
    $('.messages').html('You haven\'t played any games yet.')
  } else {
    $('.messages').html('You\'ve played ' + store.gamesPlayed + ' games so far!')
  }
}

const onIndexGameFailure = responseData => {
  console.log('failure', responseData)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onIndexGameSuccess,
  onIndexGameFailure
}

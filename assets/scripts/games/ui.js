'use strict'

const store = require('../store')
const app = require('../app')

// // Game
const onNewGameSuccess = gameData => {
  console.log('success')
  store.gameID = gameData.game.id
  store.cell = gameData.game.cell
  store.player = 'X'
  store.over = gameData.game.over
  console.log(store.gameID)
  console.log(store.cell)
  console.log(store.player)
  console.log(store.over)
}

const onNewGameFailure = responseData => {
  console.log('failure', responseData)
}

const onUpdateGameSuccess = responseData => {
  console.log('success')
  store.games = responseData.games
  store.cells = app.gameBoard
  // store.player = ''
  console.log(store.games)
  console.log(store.cells)
}

const onUpdateGameFailure = responseData => {
  console.log('failure', responseData)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}

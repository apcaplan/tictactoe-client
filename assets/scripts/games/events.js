'use strict'
const api = require('./api')
const ui = require('./ui')
const app = require('../app')

const onNewGame = event => {
  const formData = '{}'
  api.newgame(formData)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = event => {
  event.preventDefault()
  console.log('Game updating')
  api.updateGame(app.gameData)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const onIndexGame = event => {
  console.log('InxedGame')
  api.indexGame()
    .then(ui.onIndexGameSuccess)
    .catch(ui.onIndexGameFailure)
}

module.exports = {
  onNewGame,
  onUpdateGame,
  onIndexGame
}

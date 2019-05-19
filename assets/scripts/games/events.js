'use strict'
const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  const formData = '{}'
  api.newgame(formData)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = event => {
  event.preventDefault()
  console.log('Game updating')
  // const data = getFormFields(event.target)
  api.updategame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onNewGame,
  onUpdateGame
}

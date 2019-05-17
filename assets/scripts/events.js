'use strict'

// Registration
const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  console.log('signup pressed')
  const form = event.target
  const formData = getFormFields(form)
  console.log('sign up pressed', formData)
  api.signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log('login pressed')
  const form = event.target
  const formData = getFormFields(form)
  console.log('login pressed', formData)
  api.signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  console.log('Pressed change password')
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onLogout = event => {
  event.preventDefault()
  console.log('Pressed logout')
  api.logout()
    .then(ui.onLogoutSuccess)
    .catch(ui.onLogoutFailure)
}

const onNewGame = event => {
  event.preventDefault()
  const formData = '{}'
  api.newgame(formData)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = event => {
  event.preventDefault()
  console.log('Game updating')
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onUpdateGame worked!')
  api.updategame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

// store.game.id

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onLogout,
  onNewGame,
  onUpdateGame
}

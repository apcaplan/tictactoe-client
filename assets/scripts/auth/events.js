'use strict'

// Registration
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onLogout = event => {
  event.preventDefault()
  api.logout()
    .then(ui.onLogoutSuccess)
    .catch(ui.onLogoutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onLogout
}

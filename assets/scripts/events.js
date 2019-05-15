'use strict'

const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onRegister = event => {
  event.preventDefault()
  console.log('signup pressed')
  const form = event.target
  const formData = getFormFields(form)
  console.log('sign up pressed', formData)

  api.register(formData)
    .then(ui.onRegisterSuccess)
    .catch(ui.onRegisterFailure)
}

const onLogin = event => {
  event.preventDefault()
  console.log('login pressed')
  const form = event.target
  const formData = getFormFields(form)
  console.log('login pressed', formData)

  api.login(formData)
    .then(ui.onLoginSuccess)
    .catch(ui.onLoginFailure)
}

module.exports = {
  onRegister,
  onLogin
}

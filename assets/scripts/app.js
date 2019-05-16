'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

// Registration
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#logout').on('submit', authEvents.onLogOut)
})

// Game
// $('.box').on('click', authEvents.playerOne)
// console.log('authEvents is', authEvents)
// exampleEvents.addHandlers()

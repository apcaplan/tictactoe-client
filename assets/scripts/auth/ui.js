// Registration
const store = require('../store')

const fade = function () {
  $('.messages').fadeOut(2500)
}

const fade2 = function () {
  $('.error').fadeOut(2500)
}

const onSignUpSuccess = responseData => {
  $('.error').show()
  $('.error').text('Created password successfully!')
  fade2()
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignUpFailure = responseData => {
  $('.error').show()
  $('.error').text('Couldn\'t register with this email and password. Please try again! ')
  fade2()
  $('#sign-up').get(0).reset()
}

const onSignInSuccess = responseData => {
  $('.error').show()
  $('.error').html('Logged in successfully!')
  fade2()
  store.user = responseData.user
  $('.opening').hide()
  $('.gameBoard').show()
  $('#change-password').show()
  $('#logout').show()
  $('#newGame').show()
  $('#gamesPlayed').show()
  $('.wrapper').show()
  $('h1').hide()
  $('.messages').text('Click New Game button to begin!')
}

const onSignInFailure = responseData => {
  $('.error').show()
  $('.error').text('Could not sign in. Please check email address and password, and try again - or create a new account.')
  fade2()
  $('#sign-in').get(0).reset()
}

const onChangePwSuccess = responseData => {
  $('.cp').html('Password changed.')
  $('#change-password').get(0).reset()
  $('.cp').fadeOut(2500)
}

const onChangePwFailure = responseData => {
  $('.cp').html('Failed to change password :(')
  $('#change-password').get(0).reset()
  $('.cp').fadeOut(2500)
}

const onLogoutSuccess = () => {
  $('.messages').show()
  $('.messages').text('Thanks for playing! Come back again soon :)')
  $('#change-password').hide()
  $('#sign-in').show()
  fade()
}

const onLogoutFailure = () => {
  $('.messages').show()
  $('.messages').text('Couldn\'t log out :()')
  fade()
}

module.exports = {
  fade,
  fade2,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onLogoutSuccess,
  onLogoutFailure
}

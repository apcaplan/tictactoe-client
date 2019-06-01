// Registration
const store = require('../store')

const onSignUpSuccess = responseData => {
  $('.earlyError').show()
  $('.earlyError').html('Created password successfully!').fadeOut(2500)
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up').get(0).reset()
}

const onSignUpFailure = responseData => {
  $('.earlyError').show()
  $('.earlyError').html('Couldn\'t register with this email and password. Please try again!').fadeOut(3500)
  $('#sign-up').get(0).reset()
}

const onSignInSuccess = responseData => {
  $('.error').show()
  $('.error').html('Logged in successfully!').fadeOut(2500)
  store.user = responseData.user
  $('.opening').hide()
  $('.gameBoard').hide()
  $('.navbar').show()
  $('#newGame').show()
  $('#login').hide()
  $('h1').hide()
  $('.messages').text('Click New Game button to begin!')
  $('#sign-in').get(0).reset()
}

const onSignInFailure = responseData => {
  $('.earlyError').show()
  $('.earlyError').text('Could not sign in. Please check email address and password, and try again - or create a new account.').fadeOut(3500)
  $('#sign-in').get(0).reset()
}

const onChangePwSuccess = responseData => {
  $('.cp').show()
  $('.cp').html('Password changed.').fadeOut(2500)
  $('#change-password').get(0).reset()
  setTimeout(() => $('.cp').html('Change password again?').fadeIn(2500), 2600)
}

const onChangePwFailure = responseData => {
  $('.cp').show()
  $('.cp').html('Failed to change password :(').fadeOut(2500)
  $('#change-password').get(0).reset()
  setTimeout(() => $('.cp').html('Try again?').fadeIn(2500), 2500)
}

const onLogoutSuccess = () => {
  $('.messages').show()
  $('.messages').html('Thanks for playing! Come back again soon :)').fadeOut(2500)
  setTimeout(() => $('.opening').show(), 3000)
  $('h1').show()
  $('#login').show()
  $('#register').show()
  $('.loginMessage').show()
  $('.main-menu').show()
  $('#sign-in').hide()
  $('.navbar').hide()
  $('#newGame').hide()
  $('.gameBoard').hide()
  $('.turn').hide()
}

const onLogoutFailure = () => {
  $('.messages').show()
  $('.messages').html('Couldn\'t log out :()').fadeOut(3500)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onLogoutSuccess,
  onLogoutFailure
}

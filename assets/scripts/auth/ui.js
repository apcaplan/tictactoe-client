// Registration
const store = require('../store')

const onSignUpSuccess = responseData => {
  $('.error').show()
  $('.error').text('Created password successfully!').fadeOut(2500)
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#change-password').get(0).reset()
}

const onSignUpFailure = responseData => {
  $('.error').show()
  $('.error').text('Couldn\'t register with this email and password. Please try again! ').fadeOut(2500)
  $('#sign-up').get(0).reset()
}

const onSignInSuccess = responseData => {
  $('.error').show()
  $('.error').html('Logged in successfully!').fadeOut(2500)
  store.user = responseData.user
  $('.opening').hide()
  $('.gameBoard').show()
  $('.navbar').show()
  $('#newGame').show()
  $('h1').hide()
  $('.messages').text('Click New Game button to begin!')
}

const onSignInFailure = responseData => {
  $('.error').show()
  $('.error').text('Could not sign in. Please check email address and password, and try again - or create a new account.').fadeOut(2500)
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
  $('.messages').text('Thanks for playing! Come back again soon :)').fadeOut(2500)
  setTimeout(() => $('.opening').show(), 2800)
}

const onLogoutFailure = () => {
  $('.messages').show()
  $('.messages').text('Couldn\'t log out :()').fadeOut(2500)
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

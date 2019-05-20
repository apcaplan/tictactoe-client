// Registration
const store = require('../store')

const fade = function () {
  $('.messages').fadeOut(2500)
}

const fade2 = function () {
  $('.error').fadeOut(2500)
}

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('.error').show()
  $('.error').text('Created password successfully!')
  fade2()
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  // $('.error').show()
  $('.error').text('Couldn\'t register with this email and password. Please try again! ')
  fade2()
  $('#sign-up').get(0).reset()
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('.error').show()
  $('.error').html('Logged in successfully!')
  fade2()
  store.user = responseData.user
  console.log('store' + store.user.token)
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  $('.opening').hide()
  $('.gameBoard').show()
  $('#change-password').show()
  $('#logout').show()
  $('#newGame').show()
  $('#gamesPlayed').show()
  $('.wrapper').show()
  $('h1').hide()
  $('.messages').text('Click on New Game button to begin!')
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('.error').show()
  $('.error').text('Could not sign in. Please check email address and password, and try again - or create a new account.')
  fade2()
  $('#sign-in').get(0).reset()
}

const onChangePwSuccess = responseData => {
  console.log('success', responseData)
  $('.modal').hide()
  $('.messages').show()
  $('.messages').text('Changed password successfully!')
  $('#change-password').get(0).reset()
  fade()
}

const onChangePwFailure = responseData => {
  console.log('failure', responseData)
  $('.messages').show()
  $('.messages').text('Failed to change password :(')
  $('#change-password').get(0).reset()
  fade()
}

const onLogoutSuccess = () => {
  console.log('success')
  $('.messages').show()
  $('.messages').text('Thanks for playing! Come back again soon :)')
  $('#change-password').hide()
  $('#sign-in').show()
  fade()
}

const onLogoutFailure = () => {
  console.log('failure')
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

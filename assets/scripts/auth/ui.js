// Registration
const store = require('../store')

const fade = function () {
  $('.messages').fadeOut(2500)
}

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('.messages').show()
  $('.messages').text('Created password successfully!')
  $('#sign-up').hide()
  fade()
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('.messages').show()
  $('.messages').text('Create password failed :( ')
  $('#sign-up').get(0).reset()
  fade()
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('.messages').show()
  $('.messages').html('Logged in successfully!')
  fade()
  store.user = responseData.user
  console.log('store' + store.user.token)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#logout').show()
  $('#newGame').show()
  $('#gamesPlayed').show()
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('.messages').show()
  $('.messages').text('Could not sign in. Please check email address and password, and try again - or create a new account.')
  fade()
  $('#sign-in').get(0).reset()
}

const onChangePwSuccess = responseData => {
  console.log('success', responseData)
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
  $('logout').hide()
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
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onLogoutSuccess,
  onLogoutFailure
}

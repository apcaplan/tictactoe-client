// Registration
const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#messages').text('Created password successfully!')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  $('#sign-up').hide()
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#messages').text('Create password failed :( ')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#messages').text('Logged in successfully!')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  store.user = responseData.user
  console.log('store' + store.user.token)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#logout').show()
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#messages').text('SignIn failed :( ')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
}

const onChangePwSuccess = responseData => {
  console.log('success', responseData)
  $('#messages').text('Changed password successfully!')
  $('#messages').removeClass()
  $('#messages').addClass('success')
}

const onChangePwFailure = responseData => {
  console.log('failure', responseData)
  $('#messages').text('Failed to change password :(')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
}

const onLogoutSuccess = () => {
  console.log('success')
  $('#messages').text('Changed password successfully!')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  $('#change-password').hide()
  $('logout').hide()
  $('#sign-in').show()
}

const onLogoutFailure = () => {
  console.log('failure')
  $('#messages').text('Failed to change password :(')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
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

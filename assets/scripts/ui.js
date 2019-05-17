// Registration
const store = require('./store')
const events = require('./events')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#messages').text('Created password successfully!')
  $('#messages').removeClass()
  $('#messages').addClass('success')
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
}

const onLogoutFailure = () => {
  console.log('failure')
  $('#messages').text('Failed to change password :(')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
}
//
// // Game
const onNewGameSuccess = responseData => {
  console.log('success')
  console.log(responseData)
  store.user.game = responseData.user.game
  store.user.token = responseData.user
  console.log('store is ' + store)
  $('#messages').text('Created new game successfully!')
  $('#messages').removeClass()
  $('#messages').addClass('success')
}

const onNewGameFailure = responseData => {
  console.log('failure', responseData)
  $('#messages').text('Faied to create new game :( ')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
}

const onIndexSuccess = response => {
  console.log('success')
  console.log(response)
}

const onIndexFailure = responseData => {
  console.log('failure', responseData)
  $('#messages').text('Faied to create new game :( ')
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
  onLogoutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onIndexSuccess,
  onIndexFailure
}

// Registration
const store = require('./store')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Created password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Create password failed :( ')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Logged in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('SignIn failed :( ')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onChangePwSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onChangePwFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Failed to change password :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onLogoutSuccess = () => {
  console.log('success')
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onLogoutFailure = () => {
  console.log('failure')
  $('#message').text('Failed to change password :(')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

// Game

// Current player rotation
// let currentPlayer = 'X'
//
// const changePlayer = function () {
//   if (currentPlayer === 'X') {
//     let currentPlayer = 'O'
//     console.log("O's turn!")
//   }
//   let currentPlayer = 'X'
//   console.log("X's turn!")
// }

// On click
$('.box').click(function () {
  console.log (this.id)
  console.log('check if space available')
  console.log('if "", addMark')
  changePlayer()
})

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

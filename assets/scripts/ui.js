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
//
// // Game
//
let gameBoard = ['', '', '', '', '', '', '', '', '']
//
let currentPlayer = 'X'
//

$('.box').click(function () {
  if (currentPlayer === 'X') {
    if (gameBoard[this.id] === '') {
      $(event.target).text('X')
      console.log(this.id)
      gameBoard[this.id] = 'X'
      console.log(gameBoard)
      currentPlayer = 'O'
    } else {
      console.log('Do not allow!')
    }
    // playerX()
  } else {
    // playerO()
    if (gameBoard[this.id] === '') {
      $(event.target).text('O')
      console.log(this.id)
      gameBoard[this.id] = 'O'
      console.log(gameBoard)
      currentPlayer = 'X'
    } else {
      console.log('Do not allow!')
    }
  }
})
//
// // if box full
//
//
//     // checkfor win
//       //if win, end game
//       // else
//       // changeTurns

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

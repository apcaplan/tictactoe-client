// Imports
const api = require('./games/api')
const authEvents = require('./auth/events')
const events = require('./games/events')
const fadeFunction = require('./auth/ui')
const gameEvents = require('./games/events')
const store = require('./store')
const ui = require('./games/ui')

$(() => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.gameBoard').hide()
  $('#newGame').hide()
  $('.navbar').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#logout').on('submit', authEvents.onLogOut)
})

// Register
$('#register').click(function () {
  $('.loginMessage').hide()
  $('#login').hide()
  $('#register').hide()
  $('#sign-up').show()
})

// Return to main menu from Registration
$('.return').click(function () {
  $('#sign-up').get(0).reset()
  $('#sign-up').hide()
  $('.loginMessage').show()
  $('#login').show()
  $('#register').show()
})

// Login
$('#login').click(function () {
  $('.loginMessage').hide()
  $('#login').hide()
  $('#register').hide()
  $('#sign-in').show()
})

// Back to register from Login
$('.register2').click(function () {
  $('#sign-in').get(0).reset()
  $('#sign-in').hide()
  $('#sign-up').show()
})

// Game presets
let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let move = 0

// New Game
$('#newGame').click(function () {
  // $('.box').show()
  $('.box').empty()
  $('.gameBoard').show()
  $('.messages').empty()
  $('.messages').show()
  $('.turn').show()
  gameEvents.onNewGame()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  move = 0
  store.over = false
  store.turn = 0
  $('.turn').text(currentPlayer + '\'s turn')
})

const gameData = {
  game: {
    cell: {
      index: 0,
      value: 'X'
    },
    over: false
  }
}

// Player moves
$('.box').on('click', function () {
  const index = Number($(event.target).attr('id'))
  // If player clicks on gameboard after the game is over...
  if (store.over) {
    $('.messages').show()
    $('.messages').html('Game over. Start a new game to continue playing!')
    fadeFunction.fade()
  // if player clicks on an occupied square....
  } else if
  (gameBoard[index] !== '') {
    $('.messages').show()
    $('.messages').html('This space is occupied. Please choose another!').fadeOut(2500)
    fadeFunction.fade()
  // if player makes a valid move...
  } else {
    gameBoard[index] = currentPlayer
    $(event.target).text(currentPlayer)
    move++
    checkForWin(currentPlayer)
    checkForTie()

    // store move in gameData for export to API
    gameData.index = index
    gameData.value = currentPlayer
    gameData.over = store.over

    // export gameData to API
    api.updateGame(gameData)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)

    // switch player
    switchPlayer(currentPlayer)
    if (store.over === false) {
      $('.turn').text(currentPlayer + '\'s turn')
    }
  }
})

// Check for Win
const checkForWin = function (player) {
  if ((gameBoard[0] === player && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
  (gameBoard[3] === player && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
  (gameBoard[6] === player && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
  (gameBoard[0] === player && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
  (gameBoard[1] === player && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
  (gameBoard[2] === player && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
  (gameBoard[0] === player && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
  (gameBoard[2] === player && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6])) {
    $('.turn').hide()
    $('.messages').empty()
    $('.messages').show()
    $('.messages').html(player + ' wins!')
    store.over = true
  }
}

// Check for Tie
const checkForTie = function () {
  if (move === 9 && store.over === false) {
    $('.turn').hide()
    $('.messages').empty()
    $('.messages').show()
    $('.messages').html('It\'s a tie')
    store.over = true
  }
}

// Switch Player
const switchPlayer = function (player) {
  if (player === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// Check number of games played
$('#gamesPlayed').click(function () {
  $('.messages').show()
  events.onIndexGame()
})

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Registration
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').hide()
  $('#logout').hide()
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#logout').on('submit', authEvents.onLogOut)
})

// Game
const store = require('./store')

let gameBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'X'

let move = 0

// New Game
$('#newGame').click(function () {
  gameEvents.onNewGame()
  $('.box').on('click')
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').empty()
  store.over = false
  store.turn = 0
  move = 0
  currentPlayer = 'X'
})

const updateGame = function (index, value, over) {
  const data = {
    game: {
      cell: {
        index: `${index}`,
        value: `${value}`
      },
      over: `${over}`
    }
  }
}

const switchPlayer = function (player) {
  if (player === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// Player moves
$('.box').on('click', function () {
  const index = Number($(event.target).attr('id'))
  // If player clicks on gameboard after the game is over...
  if (store.over) {
    $('.messages').html('Game over. Start a new game to continue playing!')
  // if player clicks on an occupied square....
  } else if
  (gameBoard[index] !== '') {
    $('.messages').html('This space is occupied. Please choose another!')
  // if player makes a valid move...
  } else {
    gameBoard[index] = currentPlayer
    updateGame(index, gameBoard[index], false)
    //
    // store.games.cells[this.id] = 'X'
    // if (store.games.cells[this.id] === '') {
    //   updateGame([this.id], 'X', )
    //   gameEvents.store.games.cells[this.id] = 'X'
    $(event.target).text(currentPlayer)
    console.log(index)
    console.log(gameBoard)
    // $('gameBoard[index]').text('X')
    move++
    console.log(move)
    // $('#index').unbind('click')
    checkForWin(currentPlayer)
    checkForTie()
    switchPlayer(currentPlayer)
  }
})
//  // player_O
//  if (gameBoard[index] === '') {
//  gameBoard[index] = 'X'
//  updateGame(index, gameBoard[index], false)
//  //
//  // store.games.cells[this.id] = 'X'
//  // if (store.games.cells[this.id] === '') {
//  //   updateGame([this.id], 'X', )
//  //   gameEvents.store.games.cells[this.id] = 'X'
//  $(event.target).text('X')
//  console.log(index)
//  console.log(gameBoard)
//  // $('gameBoard[index]').text('X')
//  moves++
//  $('#index').unbind('click')
//  checkForWin('X')
//  checkForTie()
//  currentPlayer = 'O'
//     if (gameBoard[this.id] === '') {
//       $(event.target).text('O')
//       console.log(this.id)
//       gameBoard[this.id] = 'O'
//       console.log(gameBoard)
//       checkForWin('O')
//       checkForTie()
//       currentPlayer = 'X'
//     }
//   }
// })

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
    winText(player)
    store.over = true
  }
}

const winText = (player) => {
  $('.messages').html(player + ' wins!')
  // $('.box').unbind('click')
  // $('.box').off('click')
}

// Check for Tie
const checkForTie = function () {
  if (move === 9 && store.over === false) {
    $('.messages').html('It\'s a tie')
    store.over = true
  }
}
// const isSpaceEmpty = element => { return element === '' }
// const checkForTie = () => {
//   if (location.some(isSpaceEmpty) === false) {

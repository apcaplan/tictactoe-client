'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

// Registration
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#logout').on('submit', authEvents.onLogOut)
})

let gameBoard = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'X'

const gameData = {
  game: {
    cell: {
      index: 0,
      value: ''
    }},
  over: false
}
// Check for Win
const winText = (player) => {
  $('.messages').html(player + ' wins!')
  $('.box').unbind('click')
  gameData.game.over = true
}

const checkForWin = function (player) {
  if (gameBoard[0] === player && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    winText(player)
  } else if (gameBoard[3] === player && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    winText(player)
  } else if (gameBoard[6] === player && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    winText(player)
  } else if (gameBoard[0] === player && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    winText(player)
  } else if (gameBoard[1] === player && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    winText(player)
  } else if (gameBoard[2] === player && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    winText(player)
  } else if (gameBoard[0] === player && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    winText(player)
  } else if (gameBoard[2] === player && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    winText(player)
  }
}

// Check for Tie
const isSpaceEmpty = element => { return element === '' }
const checkForTie = () => {
  if (gameBoard.some(isSpaceEmpty) === false) {
    $('.messages').html('It\'s a tie')
    gameData.game.over = true
    api.updateGameData(gameData)
  }
}

// player_X
$('.box').click(function () {
  if (currentPlayer === 'X') {
    if (gameBoard[this.id] === '') {
      $(event.target).text('X')
      console.log(this.id)
      gameBoard[this.id] = 'X'
      console.log(gameBoard)
      let index = this.id
      let value = 'X'
      checkForWin('X')
      checkForTie()
      currentPlayer = 'O'
    }
    } else {

// player_O
    if (gameBoard[this.id] === '') {
      $(event.target).text('O')
      console.log(this.id)
      gameBoard[this.id] = 'O'
      console.log(gameBoard)
      checkForWin('O')
      checkForTie()
      currentPlayer = 'X'
    }
  }
})

// New Game
$('#newGame').click(function () {
  events.onNewGame()
  $('.box').bind()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').text('')
})

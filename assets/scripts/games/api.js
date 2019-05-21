'use strict'

const config = require('../config')
const store = require('../store')

const newgame = formData => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameId,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
        },
        over: false
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const indexGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newgame,
  updateGame,
  indexGame
}

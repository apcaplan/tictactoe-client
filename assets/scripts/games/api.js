'use strict'

const config = require('../config')
const store = require('../store')

const newgame = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = data => {
  console.log('data is', data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

module.exports = {
  newgame,
  updateGame
}

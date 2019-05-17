'use strict'

const config = require('./config')
const store = require('./store')

// const store = require('./store')

// Registration
const signup = formData => {
  console.log('from api signup')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signin = formData => {
  console.log('from api signin')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changepw = formData => {
  console.log('from api changepw')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signout = () => {
  console.log('from api signout')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newgame = () => {
  console.log('from api newgame')
  return $.ajax({
    url: config.apiUrl + '/games',
    // ${store.game.id}
    method: 'POST',
    game: {
      id: 0,
      cells: [],
      over: false,
      player_x: {
        id: 1,
        email: ''
      },
      player_o: null
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (data) => {
  console.log('data is', data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signin,
  signup,
  changepw,
  signout,
  newgame,
  // indexGame,
  updateGame
}

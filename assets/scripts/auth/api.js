'use strict'

const config = require('../config')
const store = require('../store')

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
    url: config.apiUrl + 'sign-in',
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

module.exports = {
  signin,
  signup,
  changepw,
  signout
}

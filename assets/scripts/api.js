'use strict'

const config = require('./config')

// const store = require('./store')

const register = formData => {
  console.log('from api signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const login = formData => {
  console.log('from api login')
  return $.ajax({
    url: config.apiUrl + '/login',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  register,
  login
}

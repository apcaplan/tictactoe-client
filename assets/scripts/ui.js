

const addMark = function () {

}

$('.row').click(function () {
  console.log('check if space available')
  console.log('if "", addMark')
})

const onRegisterSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Created password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onRegisterFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Create password failed :( ')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onLoginSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Logged in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onLoginFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Login failed :( ')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onRegisterSuccess,
  onRegisterFailure,
  onLoginSuccess,
  onLoginFailure
}

const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')
const loginButton = document.getElementById('login-button')
const dataError = document.getElementById('data-error')

loginButton.addEventListener('click', () => {
  let correctdata = validate()

  if (correctdata) {
    let userEmail = emailField.value
    let userPassword = passwordField.value

    let userData = { email: userEmail, password: userPassword }

    sendData( userData, ( data ) => {
      console.log(data.length)
      if (data.length == 0) {
        dataError.innerHTML = 'Usuario y/o Contraseña Invalidos.'
      } else {
        window.location.href  = '../index.php'
      }
    } )
  }
})

passwordField.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    validate()
  }
})


function validate () {
  let v = Validator()

  if (v.isEmail('email')) {
    v.hideErrorStyle('email')
    v.hideErrorMessage('email-error')
  } else {
    v.showErrorStyle('email')
    v.showErrorMessage('email-error', 'el email es inválido')
    return false
  }

  if (v.isEmpty('password')) {
    v.showErrorStyle('password')
    v.showErrorMessage('password-error', 'la contraseña no puede estar vacía')
    return false
  } else {
    v.hideErrorStyle('password')
    v.hideErrorMessage('password')
  }

  // TODO: Send to php
  console.log(`email: ${emailField.value}, password: ${passwordField.value}`)
  return true
}

function sendData( userData, callback ) {
  let xhttp = new XMLHttpRequest()

  xhttp.open( 'POST', '../src/LoginUser.php' )
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.send( JSON.stringify( userData ) )
  xhttp.onload = () => {
    console.log( xhttp.response )
    callback( xhttp.response )
    //window.location.href = '../adminCatalog/index.php'
  }
}

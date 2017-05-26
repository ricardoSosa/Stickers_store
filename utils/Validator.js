let Validator = () => {
  let obj = {}

  let getElement = id => document.getElementById(id)
  let valueOf = id => document.getElementById(id).value


  obj.isEmail = id => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(valueOf(id))
  }


  obj.isEmpty = id => (valueOf(id) === '')


  obj.showErrorStyle = id => (getElement(id).className = 'error')


  obj.hideErrorStyle = id => (getElement(id).className = '')


  obj.showErrorMessage = (id, message) => (getElement(id).innerText = message)


  obj.hideErrorMessage = id => (getElement(id).innerText = '')


  return obj
}

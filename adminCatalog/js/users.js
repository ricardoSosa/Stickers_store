const content = document.getElementById("content")

function listUsers(){
  if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(this.responseText)
            console.log(users)
            users.forEach( users => {
	            if(users.tipo == "normal"){
	            	var toHTML = `<div class="sticker" id="${users.id}">
			            <span class="title">${users.name}</span>
			            <a class='price' href='#' onclick="delUser('${users.id}')">X</a>
			            <span class="price" id="email">Email: ${users.email}</span>
			            <span class="price" id="tipo">Tipo: ${users.tipo}</span>
	            	</div>`
	            } else {
	            	var toHTML = `<div class="sticker" id="${users.id}">
			            <span class="title">${users.name}</span>
			            <span class="price" id="email">Email: ${users.email}</span>
			            <span class="price" id="tipo">Tipo: ${users.tipo}</span>`
	            }
	            content.innerHTML += toHTML
            })
        }
    }
    xmlhttp.open("GET","../adminCatalog/users.php",true)
    xmlhttp.send()
}

function delUser(userId){
	var r = confirm("¿Seguro que desea eliminar este usuario?");
    if (r == true) {
		id = {
			"id": userId
		}
		var xhttp = new XMLHttpRequest()
	    xhttp.open( 'POST', 'users.php' )
	    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
	    xhttp.send( JSON.stringify(id) )
	    xhttp.onload = () => {
	        window.location.href = "usersView.php"
	    }
    } else {

    }
}

window.addEventListener("load", listUsers)
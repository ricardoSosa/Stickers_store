const readyButton = document.getElementById("edit")
readyButton.addEventListener("click", modifySticker)

const title = document.getElementById("title")
const price = document.getElementById("price")
const category = document.getElementById("category")
const description = document.getElementById("description")
const units = document.getElementById("units")
const image = document.getElementById("image")

function showInformation(){
	var keys = Object.keys(localStorage);
	console.log(keys)
	for (i in keys){
		sticker = JSON.parse(localStorage.getItem(keys[i]));
		title.value = sticker.title
		price.value = sticker.price
		category.innerHTML = sticker.category
		description.innerHTML = sticker.description
		units.value = sticker.units
		image.src = sticker.imageUrl
		id = sticker.id
	}
}

function modifySticker(){
	if (title.value != "" && price.value != "" && category.value != "" && description.value != "" &&
		units.value != ""){

		if(price.value == 0 || price.value < 0 || isNaN(price.value) ||
			units.value < 0 || isNaN(units.value)){
			evalMsg.innerHTML = ""
			evalMsg.innerHTML = "Precio debe contener valores positivos mayores a 0. La cantidad de unidades debe ser un valor positivo."
		} else {
		    var r = confirm("¿Seguro que desea modificar los datos?");
		    if (r == true) {
		        var sticker = {
				"title": title.value,
				"price": price.value,
				"category": category.value,
				"description": description.value,
				"units": units.value,
				"id": id,
				"tipo": "modificar"
				}

				var xhttp = new XMLHttpRequest()
				xhttp.open( 'POST', 'adminCatalog.php' )
				xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
				xhttp.send( JSON.stringify( sticker ) )
				xhttp.onload = () => {
					removeStickerStorage()
					var st = {
					"title": title.value,
					"price": price.value,
					"category": category.value,
					"description": description.value,
					"units": units.value
					}
					saveStickerStorage(st)
					wnd = window.opener
					wnd.location.href = 'index.php'
				    window.location.href = 'sticker.php'
		    	} 
		    } else {
			}
		}
	} else {
		evalMsg.innerHTML = ""
		evalMsg.innerHTML = "Los campos no pueden estar vacíos."
	}
	
}

function saveStickerStorage(sticker){
    if (typeof(Storage) != "undefined"){
        localStorage.setItem(sticker.title, JSON.stringify(sticker));
    } else{
    }
}

function removeStickerStorage(){
    keys = Object.keys(localStorage);
    longitudStorage = keys.length;
    for (i in keys){
        localStorage.removeItem(keys[i]);
    }
}

window.addEventListener("load", function(){
	showInformation()
})
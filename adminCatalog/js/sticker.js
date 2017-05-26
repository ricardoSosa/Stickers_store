const deleteButton = document.getElementById("delete")
deleteButton.addEventListener("click", deleteSticker)

function showInformation(){
	var title = document.getElementById("title")
	var price = document.getElementById("price")
	var category = document.getElementById("category")
	var description = document.getElementById("description")
	var image = document.getElementById("image")
	var keys = Object.keys(localStorage);
	for (i in keys){
		sticker = JSON.parse(localStorage.getItem(keys[i]));
		title.innerHTML = sticker.title
		price.innerHTML = 'Precio: $' + sticker.price
		units.innerHTML = 'Unidades restantes: ' + sticker.units
		category.innerHTML = "Categoría: " + sticker.category
		description.innerHTML = sticker.description
		image.src = sticker.imageUrl
		id = sticker.id
	}
}

function deleteSticker(){
	var xhttp = new XMLHttpRequest()

	var sticker = {
				"id": id,
				"tipo": "eliminar"
			}

	xhttp.open( 'POST', 'adminCatalog.php' )
	xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
	xhttp.send( JSON.stringify( sticker ) )
	xhttp.onload = () => {

		removeStickerStorage()
		wnd = window.opener
		wnd.location.href = 'index.php'
		window.close()
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

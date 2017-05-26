const inputImage = document.getElementById("inputImage")

const inputTitle = document.getElementById("inputTitle")

const textDescription = document.getElementById("textDescription")

const inputPrice = document.getElementById("inputPrice")

const inputUnits = document.getElementById("inputUnits")

var sendButton = document.getElementById("send")
sendButton.addEventListener("click", evaluate)

var evalMsg = document.getElementById("evalMsg")

function evaluate() {
	if (inputImage.value != "" && inputTitle.value != "" && textDescription.value != "" &&
		inputPrice.value != "" && inputUnits.value != ""){

		if (inputPrice.value == 0 || inputPrice.value < 0 || isNaN(inputPrice.value) ||
			inputUnits.value < 0 || isNaN(inputUnits.value)) {
			evalMsg.innerHTML = ""
			evalMsg.innerHTML = "Precio debe contener valores positivos mayores a 0. La cantidad de unidades debe ser un valor positivo."
		} else {
			console.log(inputTitle.value.length)
			if (inputTitle.value.length > 15) evalMsg.innerHTML = "El título no puede ser mayor a 15 letras."
			else addNewSticker()
		}
	} else {
		evalMsg.innerHTML = ""
		evalMsg.innerHTML = "Los campos no pueden estar vacíos."
	}
}

function addNewSticker() {
	var image = inputImage.files[0]
	var formData = new FormData()

	formData.append("title", inputTitle.value);
	formData.append("category", inputCategory.value);
	formData.append("description", textDescription.value);
	formData.append("price", inputPrice.value);
	formData.append("units", inputUnits.value);
	formData.append("imageUrl", inputImage.value);
	formData.append("image", image);
	//formData.append("tipo", "insertar");
	//var sticker = {
	//	"title": inputTitle.value,
	//	"category": inputCategory.value,
	//	"description": textDescription.value,
	//	"price": inputPrice.value,
	//	"units": inputUnits.value,
	//	"imageUrl": inputImage.value,
	//	"image": image,
	//	"tipo": "insertar"
	//}
	var xhttp = new XMLHttpRequest()
	xhttp.open( 'POST', 'add-sticker.php' )
	xhttp.send( formData )
	xhttp.onload = () => {
		console.log( xhttp.response )
		wnd = window.opener;
		wnd.location.href = 'index.php'
	    window.close()
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
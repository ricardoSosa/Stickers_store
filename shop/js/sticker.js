const addCartButton = document.getElementById("add")
addCartButton.addEventListener("click", addToCart)

const msg = document.getElementById("msg")

var id

function showInformation(){
	var title = document.getElementById("title")
	var price = document.getElementById("price")
	var category = document.getElementById("category")
	var description = document.getElementById("description")
	var image = document.getElementById("image")
	var keys = Object.keys(localStorage);
	for (i in keys){
		var sticker = JSON.parse(localStorage.getItem(keys[i]));
		title.innerHTML = sticker.title
		price.innerHTML = 'Precio: $' + sticker.price
		units.innerHTML = 'Unidades restantes: ' + sticker.units
		category.innerHTML = "Categoría: " + sticker.category
		description.innerHTML = sticker.description
		image.src = sticker.imageUrl
		id = sticker.id
	}
}

function addToCart(){
    var keys = Object.keys(localStorage);
    for (i in keys){
        var sticker = JSON.parse(localStorage.getItem(keys[i]));
        if (sticker.units == 0){
            msg.innerHTML = "No hay unidades suficientes."
        } else {
            var cookies = JSON.parse(readCookie("sticker_cookies"))
            if (cookies == null){
                add()
            } else if (cookies[sticker.id] == undefined) {
                add()
            } else {
                console.log(cookies)
                console.log(cookies[sticker.id])
                console.log(sticker.units)
                if (cookies[sticker.id] < sticker.units){
                    add()
                } else {
                    msg.innerHTML = "No hay unidades suficientes."
                } 
            }
        }
    }
	//window.close()
}

function add(){
    var r = confirm("¿Seguro que desea agregar el producto al carrito?");
    if (r == true) {
        createCookie("sticker_cookies", id)
        msg.innerHTML = "Agregado al carrito."
    } else {
    }
}

function createCookie(name, value) {
    var expires = '';
    date = new Date();
    days = 7;

    if (days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    }
    var x = document.cookie;
    var sticker_cookies = readCookie("sticker_cookies");
    cosa = JSON.parse(sticker_cookies);
    if(cosa == null){
        cosa = {};
        cosa[value] = 1;
        document.cookie = name + '=' + JSON.stringify(cosa) + expires + '; path=/';
    } else {
        if(value in cosa){
            cosa[value] = cosa[value] + 1;
        } else {
            cosa[value] = 1;
        }
        document.cookie = name + '=' + JSON.stringify(cosa) + expires + '; path=/';
    }
    console.log(document.cookie)
}

function readCookie(name) {
    var cookies = document.cookie.split(';'),
        length = cookies.length,
        i,
        cookie,
        nameEQ = name + '=';
    for (i = 0; i < length; i += 1) {
        cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

window.addEventListener("load", function(){
	showInformation()
})

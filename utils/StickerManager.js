let StickerManager = () => {
  let obj = {}
  /*
    {
      id: 0,
      title: '',
      price: 0.00,
      category: '',
      description: '',
      imageUrl: ''
    }
  */

  obj.getAllStickers = () => {
    let stickers = []
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        stickers = JSON.parse(this.responseText)
      }
    }

    xmlhttp.open('GET', '../adminCatalog/adminCatalog.php?category=all', false)
    xmlhttp.send()

    return stickers
  }


  obj.showStickers = (id, stickers) => {
    document.getElementById(id).innerHTML = ''

    stickers.forEach( x => {
      let htmlSticker =
        `<div class="sticker" id="${x.id}" onclick="obtainDetails(${x.id})">
          <img src="${x.imageUrl}">
          <span class="title">${x.title}</span>
          <span class="price">\$${x.price}</span>
          <span class="add-to-cart">comprar</span>
        </div>`

      document.getElementById(id).innerHTML += htmlSticker
    })
  }



  obj.addSticker = ({ title, price, category, imageUrl }) => {

  }

  obj.deleteSticker = id => {

  }

  obj.getStickersByCategory = category => obj.getAllStickers().filter(x => x.category === category)

  obj.getStickersById = id => obj.getAllStickers().filter(x => x.id === id)



  return obj
}

function obtainDetails(id){
	var popupWindow = openWindow()
	if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	var sticker = JSON.parse(this.responseText)[0]
            console.log(sticker)
            removeStickerStorage()
            saveStickerStorage(sticker)
        	popupWindow.document.open()
			var content =
				`<HTML>
					<HEAD><TITLE></TITLE>
                          <link rel="stylesheet" href="css/sticker.css">
                    </HEAD>
					<BODY style="background-color: #E8EAF6;">
					   <script type="text/javascript">
                        window.addEventListener("load", function () {
                            window.location.href = 'sticker.php'
                        })
                       </script>
					</BODY>
				</HTML>`
			popupWindow.document.writeln(content)
			popupWindow.document.close()
        }
    }
    xmlhttp.open("GET","../adminCatalog/adminCatalog.php?id=" + id,true)
    xmlhttp.send()
}

function openWindow(){
	var h = 650
	var w = 650
	var wLeft = window.screenLeft ? window.screenLeft : window.screenX
  	var wTop = window.screenTop ? window.screenTop : window.screenY
  	var left = wLeft + (window.innerWidth / 2) - (h / 2)
  	var top = wTop + (window.innerHeight / 2) - (w / 2)
	var style = 'height=250px,width=' + (w+150) + ',left=' + left + ',top=' + (top+200) + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=no'
	var popupWindow = window.open(null,'popUpWindow', style)
	popupWindow.focus()

	return popupWindow
}

function removeStickerStorage(){
    keys = Object.keys(localStorage);
    longitudStorage = keys.length;
    for (i in keys){
        localStorage.removeItem(keys[i]);
    }
}

function saveStickerStorage(sticker){
    if (typeof(Storage) != "undefined"){
        console.log(sticker.title)
        localStorage.setItem(sticker.title, JSON.stringify(sticker));
    } else{
    }
}

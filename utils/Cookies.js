
if (document.cookie && document.cookie != "") {
  process_cookie()
}

const buyButton = document.getElementById("buy")
buyButton.addEventListener("click", function () {
  var keys = Object.keys(localStorage);
  for (i in keys){
    var sticker = JSON.parse(localStorage.getItem(keys[i]));
    var id = sticker.id
  }
  addToCart(id)
})

function addToCart(id){
  createCookie('id', id, 3)
  console.log(getCookie())
}

function getCookie() {
  var key, val, res;
  //get all cookie
  var oldCookie = document.cookie.split(';');
  for (var i = 0; i < oldCookie.length; i++) {
    key = oldCookie[i].substr(0, oldCookie[i].indexOf("="));
    val = oldCookie[i].substr(oldCookie[i].indexOf("=") + 1);
    key = key.replace(/^\s+|\s+$/g, "");
    //find "user_cookie"
    if (key == "prod") {
      res = val;
    }
  }
  if (res == undefined) {
    return null;
  } else {
    res = JSON.parse(res);
    return res;
  }
}

function process_cookie() {
  var whole_cookie = getCookie();
  if (whole_cookie != null) {
    item_number = whole_cookie;
    console.log(item_number);
  }

}

function kill_cookies(){
    createCookie("prod", "", -1);
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
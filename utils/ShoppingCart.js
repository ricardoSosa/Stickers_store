let ShoppingCart = () => {
  let obj = {}
  let userStickers = []
  var sm = StickerManager()

  obj.showCart = () => {
    var windowCart = window.open("", "", "width=650,height=650")
    windowCart.location.href = 'cart.php'

    // sm.showStickers('cart', userStickers)
  }

  obj.addSticker = sticker => userStickers.push(sticker)

  obj.removeSticker = id => userStickers = userStickers.filter(x => x.id !== id)

  return obj
}
<?php

session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Carrito de compras</title>
  <link rel="stylesheet" href="css/cart.css">
  
</head>
<body>
  <section id="header">
    <h1>Carrito de Compras</h1>
  </section>

  <section id="content"> 
  <!--
    <div class="sticker" id="0">
      <img src="https://ih0.redbubble.net/image.357542102.4834/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg" alt="sticker">
      <span class="title">Bored Seal</span>
      <span class="delete">X</span>
      <span class="price">$2.53</span>
    </div>

    <div class="sticker" id="1">
      <img src="https://ih1.redbubble.net/image.353367608.9428/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg" alt="sticker">
      <span class="title">Smart Unicorn</span>
      <span class="delete">X</span>
      <span class="price">$3.80</span>
    </div>

    <div class="sticker" id="2">
      <img src="https://ih1.redbubble.net/image.331577825.1978/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg" alt="sticker">
      <span class="title">VueJS</span>
      <span class="delete">X</span>
      <span class="price">$2.95</span>
    </div>
     -->
  </section>
<br>
  <section id="prec">
    Precio total: $<div id="totalPrice">0</div>
  </section>

  <div id="msg">
  </div>

  <?php if( isset( $_SESSION[ 'BBL_email' ] ) ) { ?>
        <section id="actions">
          <div id="buy" onclick="buyStickers()">
            <a href="#">Comprar</a>
          </div>
        </section>
    <?php } else { ?>
        <section id="actions">
          <div id="buy">
            <a href="#" onclick="msgLogin()">Comprar</a>
          </div>
        </section>
    <?php } ?>

  <section id="actions">
    <div id="delCar">
      <a href="#">Eliminar carrito</a>
    </div>
  </section>

  <section id="actions">
    <div id="cerrar">
      <a href="#">Cerrar</a>
    </div>
  </section>

  <script src="js/cart.js"></script>
</body>
</html>
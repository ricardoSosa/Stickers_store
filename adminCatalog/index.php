<?php
session_start();
if( isset( $_SESSION[ 'BBl_tipoUsuario' ] ) ){
  if ( $_SESSION['BBl_tipoUsuario'] != 'admin' ){
  # code...
  echo "<script>window.location.href = '../index.php'</script>";
  }
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Blue Bubblegum</title>
  <link rel="stylesheet" href="css/adminCatalog.css" type="text/css">
</head>
<body>
<header>
    <div id="logo">
      <a href="#">
        Blue Bubblegum
      </a>
    </div>

    <div id="categories-menu">
      <ul>
        <li><a id="technology" href="#">TECNOLOGIA</a></li>
        <li><a id="comics-manga" href="#">COMICS &amp; MANGA</a></li>
        <li><a id="movies" href="#">PELICULAS</a></li>
        <li><a id="others" href="#">OTROS</a></li>
      </ul>
    </div>

    <div id="login-menu">
      <a href="#" onclick="showUsers()">Usuarios</a><br><br>
      <a href="#" onclick="logOut()">Cerrar Sesión</a>
    </div>

    <div id="add">
      <a href="#">
        <span>+</span>
      </a>
    </div>
  </header>
  <section id="search-bar">
    <div id="search">
      <input id="sb" type="text" placeholder="Buscar">
    </div>
  </section>
  <section id="content">

  </section>

   <footer>
    <div id="comments">
      <label id="com">¿Comentarios?</label><br>
      <textarea id="comment"></textarea><br>
      <a id="send" href="#">Enviar</a>
    </div>
  </footer>

  <script type="text/javascript" src="js/adminCatalog.js"></script>
</body>
</html>

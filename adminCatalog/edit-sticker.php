<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sticker</title>
  <link rel="stylesheet" href="css/sticker.css">
</head>
<body>
  <section id="content">
    <div class="sticker" id="0">
      <img id="image" alt="sticker">
      <label>Nombre:</label>
      <input type="text" class="title" id="title" />
      <span class="delete"><a href="sticker.php">X</a></span>
      <span class="edit" id="edit"><a href="#">Listo</a></span>
      <label>Precio:</label>
      <input type="text" class="price" id="price" />
      <label>Cantidad: </label>
      <input type="text" class="units" id="units" />
    </div>
    <div class="description">
      Categoría: <textarea id="category"></textarea>
      <textarea id="description"></textarea>
    </div>
    <div id="evalMsg"></div>
  </section>
  <script type="text/javascript" src="js/edit-sticker.js"></script>
</body>
</html>
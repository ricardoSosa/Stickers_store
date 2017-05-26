<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sticker</title>
  <link rel="stylesheet" href="css/add-sticker.css">
</head>
<body>
  <h1>Agregar Sticker</h1>
  <section id="content">
    <div id="add-sticker-form">
      <div>
        <label>Imagen: </label>
        <input type="file">
      </div>
      <div>
        <label>Título: </label>
        <input type="text">
      </div>
      <div>
        <label>Descripción: </label>
        <textarea id=""></textarea>
      </div>
      <div>
        <label>Precio: </label>
        <input type="text">
      </div>
      <div id="send">
        <a href="#">Agregar</a>
      </div>
    </div>
  </section>
  <script>
    document
      .getElementsByClassName('edit')[0]
      .addEventListener('click', event => {
        window.location.href = 'edit-sticker.php';
      })
  </script>
</body>
</html>
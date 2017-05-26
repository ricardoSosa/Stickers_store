<?php
  session_start();
  $_SESSION = array();
  session_destroy();
  print_r($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>

  <script>
    window.location.href = '../index.php'
  </script>

</body>
</html>

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Luz de casa</title>
  <link rel="stylesheet" href="css/styles.css">
  <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
  <script src="js/scripts.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <?php 
    //La luz esta conectada en la 18
    exec("gpio -g mode 18 out");
    exec("gpio -g mode 17 out");
  ?>
  <div id="luz" class="luz"></div>
  <button id="switch">Encender</button>
  <div id="respuesta"></div>
</body>
</html>
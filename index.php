<!doctype html>
<!-- <html lang="en" manifest="cache.manifest"> -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Luz de casa</title>
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/scripts.js"></script>
  <link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <?php
    //La luz esta conectada en la 18
    exec("gpio -g mode 18 out");
    exec("gpio -g mode 17 out");
  ?>
  <div id="luz" class="luz"></div>
  <button id="switch">|</button>
  <div id="respuesta"></div>
</body>
</html>
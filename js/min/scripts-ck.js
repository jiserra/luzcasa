function paintUi(e){e?($("#luz").addClass("encendida"),$(this).text("Apagar")):($("#luz").removeClass("encendida"),$(this).text("Encender"))}function toggleLuz(){$("#luz").addClass("loading"),estado?$("#respuesta").load("toggle.php",{apagar:!0},function(){$("#luz").removeClass("loading"),estado=!1,paintUi(estado)}):$("#respuesta").load("toggle.php",{encender:!0},function(){$("#luz").removeClass("loading"),estado=!0,paintUi(estado)})}var estado=!1;$.get("test.php",function(e){estado=1===e.estado?!1:!0,paintUi(estado)}),$(function(){$("#switch").on("click",function(){toggleLuz()})});
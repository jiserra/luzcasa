var supportsTouch = false;
var pointerEvent = 'click';
if ('ontouchstart' in window) {
    //iOS & android
    supportsTouch = true;
    pointerEvent = 'touchstart';
} else if(window.navigator.msPointerEnabled) {
    //Win8
    supportsTouch = true;
}

var estado = false;

function paintUi (estado) {
  if(!estado) {
    $('#luz').removeClass('encendida');
    //$('#switch').text('|');
  } else {
    $('#luz').addClass('encendida');
    //$('#switch').text('O');
  }
}

function toggleLuz() {
  $('#luz').addClass('loading');
  if(!estado) {
    //La luz esta apagada, quiero encenderla
    $("#respuesta").load("toggle.php", {encender: true }, function() {
        $('#luz').removeClass('loading');
        estado = true;
        paintUi(estado);
    });
  } else {
    //La luz esta encendida, quiero apagarla
    $("#respuesta").load("toggle.php", {apagar: true }, function() {
        $('#luz').removeClass('loading');
        estado = false;
        paintUi(estado);
    });
  }
}


$(function () {
  $('#luz').addClass('loading');
  // Obtener el estado real del relay al inicio
  $.get("data.php", function( data ) {
    if(data==="1") {
      estado = false;
    } else {
      estado = true;
    }
    paintUi(estado);
    $('#luz').removeClass('loading');
    $('#switch').show();
  });

  $('#switch').on(pointerEvent, function() {
      toggleLuz();
  });

  $('#clima').on(pointerEvent, function() {
      $("#respuesta").load("asistente.php");
  });

});

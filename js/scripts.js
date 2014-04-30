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

var estadoLuz = false;
var estadoAudio = false;

function paintUi (estado, tipo) {
  $('#' + tipo).removeClass('loading');
  if(!estado) {
    $('#' + tipo).removeClass('encendida');
  } else {
    $('#' + tipo).addClass('encendida');
  }
}

function toggleEstado(estado, tipo) {
  $('#' + tipo).addClass('loading');

  if(!estado) {
    //La luz esta apagada, quiero encenderla
    $("#respuesta").load("toggle.php", {encender: true, tipo: tipo }, function() {
        paintUi(true, tipo);
        return true;
    });
  } else {
    //La luz esta encendida, quiero apagarla
    $("#respuesta").load("toggle.php", {apagar: true }, function() {
        paintUi(false, tipo);
        return false;
    });
  }
}


$(function () {
  $('.luz').addClass('loading');
  // Obtener el estado real del relay de la LUZ al inicio
  $.get("dataLuz.php", function( data ) {
    if(data==="1") {
      estadoLuz = false;
    } else {
      estadoLuz = true;
    }
    paintUi(estadoLuz, 'luz');
    $('#luz').removeClass('loading');
    $('#switchLuz').show();
  });
  // Obtener el estado real del relay del AUDIO al inicio
  $.get("dataAudio.php", function( data ) {
    if(data==="1") {
      estadoAudio = false;
    } else {
      estadoAudio = true;
    }
    paintUi(estadoAudio, 'audio');
    $('#audio').removeClass('loading');
    $('#switchAudio').show();
  });

  $('#switchLuz').on(pointerEvent, function() {
      if(toggleEstado(estadoLuz, 'luz')) {
        estadoLuz = true;
      } else {
        estadoLuz = false;
      }
  });

  $('#switchAudio').on(pointerEvent, function() {
      if(toggleEstado(estadoAudio, 'audio')) {
        estadoAudio = true;
      } else {
        estadoAudio = false;
      }
  });

});

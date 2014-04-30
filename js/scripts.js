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

var estado = [];

estado['luz'] = false;
estado['audio'] = false;

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

  if(estado===false) {
    //Esta apagado, quiero encenderlo
    $("#respuesta").load("toggle.php", {estado: 'prender', tipo: tipo }, function() {
        paintUi(true, tipo);
        estado[tipo] = true;
      }
    );
  } else {
    //Esta encendido, quiero apagarlo
    $("#respuesta").load("toggle.php", {estado: 'apagar', tipo: tipo }, function() {
        paintUi(false, tipo);
        estado[tipo] = false;
      }
    );
  }
}


$(function () {
  $('.luz').addClass('loading');
  // Obtener el estado real del relay de la LUZ al inicio
  $.get("dataLuz.php", function( data ) {
    if(data==="1") {
      estado['luz'] = false;
    } else {
      estado['luz'] = true;
    }
    paintUi(estado['luz'], 'luz');
    $('#luz').removeClass('loading');
    $('#switchLuz').show();
  });
  // Obtener el estado real del relay del AUDIO al inicio
  $.get("dataAudio.php", function( data ) {
    if(data==="1") {
      estado['audio'] = false;
    } else {
      estado['audio'] = true;
    }
    paintUi(estado['audio'], 'audio');
    $('#audio').removeClass('loading');
    $('#switchAudio').show();
  });

  $('#switchLuz').on(pointerEvent, function() {
    toggleEstado(estado['luz'], 'luz');
  });

  $('#switchAudio').on(pointerEvent, function() {
    toggleEstado(estado['audio'], 'audio');
  });

});

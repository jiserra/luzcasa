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

function paintUi (estado, tipo) {
  $('#' + tipo).removeClass('loading');
  if(!estado) {
    $('#' + tipo).removeClass('encendida');
  } else {
    $('#' + tipo).addClass('encendida');
  }
}

function toggleEstado(tipo) {
  $('#' + tipo).addClass('loading');

  $.get('data-' + tipo + '.php').done(function( data ) {
    //Esta apagado, quiero encenderlo
    if(data==="1") {
      $("#respuesta").load("toggle.php", {estado: 'prender', tipo: tipo }, function() {
        paintUi(true, tipo);
      });
    } else {
      $("#respuesta").load("toggle.php", {estado: 'apagar', tipo: tipo }, function() {
        paintUi(false, tipo);
      });
    }
  });
}

$(function () {
  $('.luz').addClass('loading');

  // Pintar la UI del principio

  $.get("data-luz.php").done(function( data ) {
    if(data==="1") {
      //Esta apagada
      paintUi(false, 'luz');
    } else {
      //Esta prendida
      paintUi(true, 'luz');
    }
    $('#switchLuz').show();
  });

  $.get("data-audio.php").done(function( data ) {
    if(data==="1") {
      //Esta apagado
      paintUi(false, 'audio');
    } else {
      //Esta prendido
      paintUi(true, 'audio');
    }
    $('#switchAudio').show();
  });

  $('#switchLuz').on(pointerEvent, function() {
    toggleEstado('luz');
  });

  $('#switchAudio').on(pointerEvent, function() {
    toggleEstado('audio');
  });

});

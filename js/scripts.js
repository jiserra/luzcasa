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

function toggleEstado(estado, tipo) {
  $('#' + tipo).addClass('loading');

  if(estado===false) {
    //Esta apagado, quiero encenderlo
    $("#respuesta").load("toggle.php", {estado: 'prender', tipo: tipo }, function() {
        paintUi(true, tipo);
      }
    );
  } else {
    //Esta encendido, quiero apagarlo
    $("#respuesta").load("toggle.php", {estado: 'apagar', tipo: tipo }, function() {
        paintUi(false, tipo);
      }
    );
  }
}

function getState(tipo) {
  if(tipo==='luz') {
    $.post("dataLuz.php", function( data ) {
      if(data==="1") {
        return false;
      } else {
        return true;
      }
    });
  } else {
    $.post("dataAudio.php", function( data ) {
      if(data==="1") {
        return false;
      } else {
        return true;
      }
    });
  }
}

$(function () {
  $('.luz').addClass('loading');

  paintUi(getState('luz'), 'luz');
  $('#switchLuz').show();

  paintUi(getState('audio'), 'audio');
  $('#switchAudio').show();

  $('#switchLuz').on(pointerEvent, function() {
    toggleEstado(getState('luz'), 'luz');
  });

  $('#switchAudio').on(pointerEvent, function() {
    toggleEstado(getState('audio'), 'audio');
  });

});

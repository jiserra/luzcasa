var estado = false;

function paintUi (estado) {
  if(!estado) {
    $('#luz').removeClass('encendida');
    $(this).text('Encender');
  } else {
    $('#luz').addClass('encendida');
    $(this).text('Apagar');
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

// Obtener el estado real del relay al inicio
$.get( "test.php", function( data ) {
  if(data.estado===1) {
    estado = false;
  } else {
    estado = true;
  }
  paintUi(estado);
});

$(function () {
  $('#switch').on('click', function() {
      toggleLuz();
  });
});

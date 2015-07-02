# Welcome to Framer
# Learn prototyping at http://framerjs.com/learn

# Create a background
background = new BackgroundLayer backgroundColor: "#DDD"

anchoSwitch = 180
padding = 40
anchoDrag = Framer.Device.screen.width - padding
altoSquare = 400

stateBg = new Layer
	backgroundColor: "#ccc"
	width: anchoDrag
	height: anchoSwitch + padding
	x: padding/2
	y: altoSquare - padding / 2
	borderRadius: 24

stateBgOn = stateBg.copy()
stateBgOn.backgroundColor = "#7ED321"
stateBgOn.opacity = 0

stateBg.style = stateBgOn.style = {
	"box-shadow": "0 0 4px 3px rgba(0,0,0,0.3) inset"
}


# Create a layer
square = new Layer
	width: anchoSwitch, height: anchoSwitch
	backgroundColor: "#FFF", borderRadius: 16
	y: altoSquare, x: padding

square.style = {
	"box-shadow": "0 0 8px 2px rgba(0,0,0,0.2)"
}

square.draggable.enabled = true
square.draggable.bounce = false
square.draggable.speedY = 0
square.draggable.speedX = 1.4
square.draggable.overdrag = false
#square.draggable.momentum = false

square.draggable.constraints = {
    x: padding
    width: anchoDrag - padding
}

curveSnap = "spring(600, 40, 40)"

estadoSquare = (estado) ->
	square.visible = estado

positionSquare = (estado) ->
	if estado == 'on'
		square.x = anchoDrag - anchoSwitch
	else
		square.x = padding

square.on "change:x", ->
	opacidad = (square.x - padding) / (anchoDrag - anchoSwitch - padding)
	stateBgOn.opacity = opacidad



square.on Events.DragEnd, ->
	if square.x < anchoDrag / 2 - anchoSwitch / 2
		square.animate
			properties:
				x:padding
			curve: curveSnap
		apagar()
	else
		square.animate
			properties:
				x:anchoDrag - anchoSwitch
			curve: curveSnap
		prender()

prender = ->
  $('#respuesta').load 'toggle.php',
    estado: 'prender'
    tipo: 'luz'
  return

apagar = ->
  $('#respuesta').load 'toggle.php',
    estado: 'apagar'
    tipo: 'luz'
  return

$ ->
	estadoSquare false
	# Pintar la UI del principio
	$.get('data-luz.php').done (data) ->
		if data == '1'
			#Esta apagada
			positionSquare 'off'
		else
			#Esta prendida
			positionSquare 'on'
		estadoSquare true
		return
	return

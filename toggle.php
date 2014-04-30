<?php

if($_POST['tipo'] == 'luz') {
  $pin = '23';
} else {
  $pin = '18';
}
if($_POST['encender']) {
  exec("gpio -g write $pin 0");
} elseif ($_POST['apagar']) {
  exec("gpio -g write $pin 1");
}


?>
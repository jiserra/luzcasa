<?php

if($_POST['tipo'] == 'luz') {
  $pin = '23';
} else {
  $pin = '18';
}

if($_POST['estado']=='prender') {
  exec("gpio -g write $pin 0");
} else {
  exec("gpio -g write $pin 1");
}


?>
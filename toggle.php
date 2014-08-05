<?php

if($_POST['tipo'] == 'luz') {
  $pin = '23';
} else {
  $pin = '18';
}

// Setear estado por si no esta puesto
exec("gpio -g mode $pin out");

if($_POST['estado']=='prender') {
  exec("gpio -g write $pin 0");
  if($pin == '23') {
    exec("echo 1 > /home/xbian/BT/manual.flag");
  }
} else {
  exec("gpio -g write $pin 1");
  if($pin == '23') {
    exec("echo 0 > /home/xbian/BT/manual.flag");
  }
}


?>
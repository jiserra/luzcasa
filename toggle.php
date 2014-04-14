<?php 

if($_POST['encender']) {
  exec("gpio -g write 18 0");
} elseif ($_POST['apagar']) {
  exec("gpio -g write 18 1");
}


?>
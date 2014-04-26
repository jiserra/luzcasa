<?php

if($_POST['encender']) {
  exec("gpio -g write 23 0");
} elseif ($_POST['apagar']) {
  exec("gpio -g write 23 1");
}


?>
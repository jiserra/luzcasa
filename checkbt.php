<?php

$file = 'automatic.flag';
$current = file_get_contents($file);

if($current=="1") {
  exec("hcitool name 04:DB:56:2C:EC:36", $phone);
  $pos = strpos($phone[0], 'iPhone');
  if ($pos !== false) {
    exec("gpio -g mode 23 out");
    exec("gpio -g write 23 0");
    file_put_contents($file, "0");
  }
}

?>
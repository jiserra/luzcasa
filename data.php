<?php

exec("gpio -g read 17", $lectura);

echo $lectura[0];

?>
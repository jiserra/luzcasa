<?php

exec("gpio -g read 23", $lectura);

echo $lectura[0];

?>
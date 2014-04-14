<?php

exec("gpio -g read 18", $lectura);

echo $lectura[0];

?>